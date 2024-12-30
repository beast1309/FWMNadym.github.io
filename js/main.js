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
            center: [55.76, 37.64],
            zoom: 10
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

});