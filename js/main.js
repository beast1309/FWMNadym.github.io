$(function () {

    if (window.location.pathname == '/RTPCalc.html') {
        const TsrBtn = document.getElementById('TsrBtn')
        TsrBtn.addEventListener('click', function () {
            const TsrTmess = document.getElementById('TsrTmess').value
            const TsrTbr = document.getElementById('TsrTbr').value
            const TsrTsld = document.getElementById('TsrTsld').value

            answer = parseInt(TsrTmess) + parseInt(TsrTbr) + parseInt(TsrTsld) + 1
            if (TsrTsld !== '' && TsrTsld !== null) {
                document.getElementById('TsrAnswer').innerText = parseInt(answer)
            }
        })

        const TslBtn = document.getElementById('TslBtn')
        TslBtn.addEventListener('click', function () {
            const TslL = document.getElementById('L').value
            const TslVsr = document.getElementById('Vsr').value

            answer = parseInt(TslL) * 60 / parseInt(TslVsr)
            if (TslL !== '' && TslL !== null && TslVsr !== '' && TslVsr !== null) {
                document.getElementById('TslAnswer').innerText = parseInt(answer)
            }
        })
    }

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

    $('#formul-btn').on('click', function () {
        $('#calc-btn').removeClass('--acitve')
        $('#calc-btn').removeAttr('disabled')
        $('#formul-btn').toggleClass('--active')
        $('#formul-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--calc')
        $('.header__nav').toggleClass('--formul')
        $('.calc__formul-inner').removeClass('--hidden')
        $('.calc__calc-inner').toggleClass('--hidden')
    })

    $('#calc-btn').on('click', function () {
        $('#formul-btn').removeClass('--acitve')
        $('#formul-btn').removeAttr('disabled')
        $('#calc-btn').toggleClass('--active')
        $('#calc-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--formul')
        $('.header__nav').toggleClass('--calc')
        $('.calc__calc-inner').removeClass('--hidden')
        $('.calc__formul-inner').toggleClass('--hidden')
    })

    $('#type').on('click', function () {
        $(document.querySelectorAll('#typeSort')).toggleClass('--active')
    })

    const type = document.getElementById('type')
    const typeSort = document.querySelectorAll('#typeSort')
    const watersTable = document.querySelectorAll('.waters__table-body')
    const watersTableRow = document.querySelectorAll('#waters-table-row')
    const watersTableCell = document.querySelectorAll('#waters-table-type')
    let rowArr = Array(watersTableRow)
    typeSort.forEach((item) => {
        item.addEventListener('click', function () {
            if (item.value == 0) console.log('0')

            else if (item.value == 2) {
                watersTableCell.forEach((cell) => {
                    cell.value = cell.innerHTML
                    watersTableRow.forEach((row) => {
                        if (row.contains(cell) && cell.value == 'Гидрант') {
                            row.parentNode.removeChild(row)
                            console.log(watersTable)
                            console.log(rowArr)
                            console.log(row)
                        }
                    })
                })



                /* if (watersTableCell.innerText == 'Гидрант'.toLowerCase()) console.log('1')
                watersTableRow.forEach((row) => {
                    console.log(row)
                    console.log(watersTableCell)
                }) */
            }

            else if (item.value == 1) {
                watersTableCell.forEach((cell) => {
                    cell.value = cell.innerHTML
                    watersTableRow.forEach((row) => {
                        if (row.contains(cell) && cell.value == 'Водоём') {
                            row.parentNode.removeChild(row)
                            console.log(row.parentNode)
                        }
                    })
                })
            }

            $(typeSort).removeClass('--active')
        })
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
            let windDir = windResponse.current.wind_dir
            switch (windDir) {
                case 'N': windDir = 'С'
                    break
                case 'S': windDir = 'Ю'
                    break
                case 'W': windDir = 'З'
                    break
                case 'E': windDir = 'В'
                    break
                case 'WNW': windDir = 'ЗСЗ'
                    break
                case 'WSW': windDir = 'ЗЮЗ'
                    break
                case 'EWE': windDir = 'ВСВ'
                    break
                case 'ESE': windDir = 'ВЮВ'
                    break
                case 'SSW': windDir = 'ЮЮЗ'
                    break
                default: windDir = ''
                    break
            }
            windText.innerHTML = (windResponse.current.wind_kph * 1000 / 3600).toFixed(2) + 'м/с' + ' ' + windDir
            console.log(windResponse)
        })

    $('.calculator__btn').on('click', function calc() {

        let firstFM = document.getElementById('firstFM').value
        let secondFM = document.getElementById('secondFM').value
        let therdFM = document.getElementById('therdFM').value
        let fourFM = document.getElementById('fourFM').value
        let fiveFM = document.getElementById('fiveFM').value

        let HoursOn = document.getElementById('HoursOn').value
        let MinutesOn = document.getElementById('MinutesOn').value

        let AirQ = document.getElementById('AirQ').value
        let BallonV = document.getElementById('BallonV').value

        let FastPmin__on = document.getElementById('FastPmin__on').value

        let Pmin__on = [firstFM, secondFM, therdFM, fourFM, fiveFM]

        Array.prototype.remove = function (value) {
            var index = this.indexOf(value)
            if (index !== -1) {
                this.splice(index, 1)
            }
        }

        for (i = 0; i < 5; i++) {

            const zeroValue = 0
            const emptyValue = ''
            Pmin__on.remove(zeroValue)
            Pmin__on.remove(emptyValue)
        }

        let min = Math.min(...Pmin__on)

        FastPmin__on = min

        let Pmax__pad = min / 3
        let Pcontrexit = min - Pmax__pad
        let DeltaTime = (Pmax__pad * BallonV) / AirQ


        HoursOn = parseInt(HoursOn)
        MinutesOn = parseInt(MinutesOn)



        if ((MinutesOn + DeltaTime) < 59) {

            MinutesOn += DeltaTime
        }

        else if ((MinutesOn + DeltaTime) > 59) {

            HoursOn += 1;
            MinutesOn = (MinutesOn + DeltaTime) - 60

        }

        if (HoursOn < 10) {
            HoursOn = '0' + HoursOn
        }

        if (HoursOn > 23) {
            HoursOn = '0' + 0
        }

        let Texit;

        if (MinutesOn < 10) {
            Texit = HoursOn + ' : 0' + Math.floor(MinutesOn)
        }

        else if (MinutesOn > 10) {
            Texit = HoursOn + ' : ' + Math.floor(MinutesOn)
        }

        let Tjob = (min * BallonV) / AirQ

        let Tback

        HoursOn = parseInt(HoursOn)
        MinutesOn = parseInt(MinutesOn)

        if ((MinutesOn + Tjob) < 59) {
            MinutesOn += Tjob
        }

        else if ((MinutesOn + Tjob) > 59) {
            HoursOn += 1
            MinutesOn = (MinutesOn + Tjob) - 60

        }

        if (HoursOn < 10) {
            HoursOn = '0' + HoursOn
        }

        if (HoursOn > 23) {
            HoursOn = '0' + 0
        }

        if (MinutesOn < 10) {
            Tback = HoursOn + ' : 0' + Math.floor(MinutesOn)
        }

        else if (MinutesOn > 10) {
            Tback = HoursOn + ' : ' + Math.floor(MinutesOn)
        }

        document.getElementById('Pmax__pad').innerHTML = Math.floor(Pmax__pad)
        document.getElementById('Pcontrexit').innerHTML = Math.floor(Pcontrexit)
        document.getElementById('DeltaTime').innerHTML = Math.floor(DeltaTime)
        document.getElementById('Texit').innerHTML = Texit
        document.getElementById('Tjob').innerHTML = Math.floor(Tjob)
        document.getElementById('Tback').innerHTML = Tback
        document.getElementById('FastPmin__on').innerHTML = FastPmin__on
    })
});