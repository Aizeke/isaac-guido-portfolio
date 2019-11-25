$(document).ready(function () {

    $(function () {
        var header = $(".start-nav");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                header.removeClass('start-nav').addClass('on-scroll-nav');
                header.removeClass('bg-transparent').addClass("bg-dark");
            } else {
                header.removeClass('on-scroll-nav').addClass('start-nav');
                header.removeClass('bg-dark').addClass("bg-transparent");
            }
        });

        $('#map-cover').on("click", (e) => {
            e.preventDefault();

            const cover = $('#map-cover');

            if (cover.data("map-active") === "on") {
                cover.addClass("active-map");
                $(".map-text-on").addClass("display-off");
                $(".map-text-off").removeClass("display-off");
                cover.data("map-active", "off");
            } else {
                cover.removeClass("active-map");
                $(".map-text-off").addClass("display-off");
                $(".map-text-on").removeClass("display-off");
                cover.data("map-active", "on");
            }
        })
    });

    // OWL CAROUSEL
    $(".carousel").owlCarousel({
        autoPlay:true
    });
    // MAP BOX

    // mapboxgl.accessToken = 'pk.eyJ1IjoiYWl6ZWtlIiwiYSI6ImNrMnAyNWIyZTAxMHczY3A0azFucHJyMzEifQ.eaBU6RYrSCwd079_pGSV6A';

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
        center: [-117.82, 33.68], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

    var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-117.82, 33.68]
            },
            properties: {
                title: 'Job Radius',
                description: 'Orange County, CA'
            }
        }]
    };

    geojson.features.forEach(function (marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

});