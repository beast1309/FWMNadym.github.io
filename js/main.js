$(function () {

    $('#menu-open').on('click', function () {
        $('.leftside__menu').removeClass('--hidden')
    })

    $('#menu-close').on('click', function () {
        $('.leftside__menu').toggleClass('--hidden')
    })

    $('#map-btn').on('click', function () {
        $('#table-btn').removeClass('--active')
        $('#table-btn').removeAttr('disabled')
        $('#map-btn').toggleClass('--active')
        $('#map-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--table')
        $('.header__nav').toggleClass('--map')
        $('.waters__map-inner').removeClass('--hidden')
        $('.waters__table-inner').toggleClass('--hidden')
    })

    $('#table-btn').on('click', function () {
        $('#map-btn').removeClass('--active')
        $('#map-btn').removeAttr('disabled')
        $('#table-btn').toggleClass('--active')
        $('#table-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--map')
        $('.header__nav').toggleClass('--table')
        $('.waters__table-inner').removeClass('--hidden')
        $('.waters__map-inner').toggleClass('--hidden')
    })

    let myMap;

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map('map', {
            center: [65.533142, 72.528935],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        });
    }

    function dates() {

        const options = {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            day: 'numeric', month: 'numeric', year: 'numeric',
            weekday: 'short',
            timeZoneName: 'short'
        }

        let time = new Date()
        document.getElementById('time-viget').innerHTML = time.toLocaleDateString('ru-RU', options)

    }

    setInterval(dates, 30);
    dates();

    const tempValC = document.getElementById('weather-temp-value-C')
    const tempValF = document.getElementById('weather-temp-value-F')
    const tempIcon = document.getElementById('weather-temp-img')
    const coundIcon = document.getElementById('weather-cound-img')
    const coundText = document.getElementById('weather-cound-text')
    const windIcon = document.getElementById('weather-wind-img')
    const windText = document.getElementById('weather-wind-text')
    let tempResponse = fetch(`https://api.weatherapi.com/v1/current.json?key=d91aebb7dc8a467fbd9193631242706&q=65.533142,72.528935&aqi=yes`, {})
        .then(tempResponse => tempResponse.json())
        .then(tempResponse => {
            tempValC.innerHTML = tempResponse.current.temp_c + "°C"
            tempValF.innerHTML = tempResponse.current.temp_f + "°F"

            if (tempResponse.current.temp_c >= 16) {
                $(tempIcon).toggleClass('hot')
            }

            else if (tempResponse.current.temp_c <= 16) {
                $(tempIcon).toggleClass('cold')
            }
        })

    let coundResponse = fetch(`https://api.weatherapi.com/v1/marine.json?q=65.533142%2C72.528935&days=1&lang=ru&key=d91aebb7dc8a467fbd9193631242706`, {})
        .then(coundResponse => coundResponse.json())
        .then(coundResponse => {

            const coundResponseText = coundResponse.forecast.forecastday[0].day.condition.text
            coundText.innerHTML = coundResponseText

            if (coundResponseText.toLowerCase().includes('снег')) {
                $(coundIcon).toggleClass('snow')
            }

            else if (coundResponseText.toLowerCase().includes('солнечно') || coundResponseText.toLowerCase().includes('ясно')) {
                $(coundIcon).toggleClass('sunny')
            }

            else if (coundResponseText.toLowerCase().includes('облачно') || coundResponseText.toLowerCase().includes('пасмурно')) {
                $(coundIcon).toggleClass('cloud')
            }

            else if (coundResponseText.toLowerCase().includes('дожд') || coundResponseText.toLowerCase().includes('гроза')) {
                $(coundIcon).toggleClass('rain')
            }
        })

    let windResponse = fetch(`https://api.weatherapi.com/v1/current.json?key=d91aebb7dc8a467fbd9193631242706&q=65.533142,72.528935&aqi=yes`, {})
        .then(windResponse => windResponse.json())
        .then(windResponse => {
            windText.innerHTML = (windResponse.current.wind_kph * 1000 / 3600).toFixed(2) + 'м/с'

            console.log(windResponse)
        }
        )
});