/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
var maxImageSize = 0;
$(document).ready(function(){
    $('.carousel-control').on("focus",function(){
        $(':focus').blur();
    });
    $("#images").append('<div class="item active"><img src="img/logos/logo.png"></div>');
    var feed = new Instafeed({
        //If the accessToken dies, redo it at http://instagram.pixelunion.net/
        accessToken: '1505573947.1677ed0.808b762f67ac40308177b86f8faec09f',
        get: 'user',
        userId:'1505573947',
        sortBy: 'most-recent',
        target: 'images',
        resolution: 'standard_resolution',
        template: '<div class="item"><img src="{{image}}" /></div>',
        filter: function(image) {
            if (image != null && image.images.standard_resolution.height >= maxImageSize){
                maxImageSize = image.images.standard_resolution.height;
                $("#images").css("height", maxImageSize);
            }
            return image.tags.indexOf('checkusoutonline') >= 0;
        }
    });
    feed.run();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(45.2618, -94.1240), // Carroll

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
   var image = 'img/mapMarker.png';
   var myLatLng = new google.maps.LatLng(45.261816, -94.123977);

  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: "Lillian's"
  });
}
