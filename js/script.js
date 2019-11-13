function initializeMap() {
    var e,
        t = new google.maps.StyledMapType([{
            elementType: "geometry",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            elementType: "labels.text",
            stylers: [{
                weight: .5
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#50657a"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#50657a"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#4b6878"
            }]
        }, {
            featureType: "administrative.land_parcel",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#64779e"
            }]
        }, {
            featureType: "administrative.neighborhood",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#4b6878"
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{
                color: "#272f3a"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#334e87"
            }]
        }, {
            featureType: "poi",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#304a7d"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{
                color: "#364552"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#364552"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#98a5be"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#2c6675"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#364452"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#364452"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#b0d5ce"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#023e58"
            }]
        }, {
            featureType: "transit",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#98a5be"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{
                color: "#3a4762"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#0e1626"
            }]
        }, {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{
                color: "#1c242b"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text",
            stylers: [{
                visibility: "on"
            }]
        }], {
            name: "Styled Map"
        }),
        l = [
            [45.495779,
                -73.573570
            ],
            [48.857078,
                2.352873
            ],
            [37.332361,
                -121.885967
            ]
        ],
        a = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            scrollwheel: !1,
            disableDefaultUI: !0,
            center: {
                lat: 38.650483,
                lng: -59.875884
            }
        });
    new google.maps.InfoWindow({});
    for (e = 0; e < l.length; e++) new google.maps.Marker({
        position: new google.maps.LatLng(l[e][0], l[e][1]),
        map: a,
        animation: google.maps.Animation.DROP,
        icon: {
            url: "img/marker.png",
            scaledSize: new google.maps.Size(60, 60)
        }
    });
    a.mapTypes.set("map_style", t),
        a.setMapTypeId("map_style")
}

! function (e) {
    "use strict";
    e(window).on("load", function () {
            e(".loader-inner").fadeOut(), e(".loader").delay(200).fadeOut("slow")
        }),
        e("a.scroll").smoothScroll({
            speed: 800,
            offset: -61
        });
    var t = e(".header"),
        l = t.offset();
    e(".block-top");

    function a() {
        e(" .hero .main-slider .slides li").css("height", e(window).height())
    }
    e(window).scroll(function () {
            e(this).scrollTop() > l.top + 500 && t.hasClass("default") ? t.fadeOut("fast", function () {
                e(this).removeClass("default").addClass("switched-header").fadeIn(200)
            }) : e(this).scrollTop() <= l.top + 500 && t.hasClass("switched-header") && t.fadeOut("fast", function () {
                e(this).removeClass("switched-header").addClass("default").fadeIn(100)
            })
        }),
        e(function () {
            a()
        }),
        e(window).resize(function () {
            a()
        }),
        e(".main-slider").flexslider({
            animation: "fade",
            slideshow: !0,
            directionNav: !1,
            controlNav: !0,
            pauseOnAction: !1,
            animationSpeed: 1e3
        }),
        e(".review-slider").flexslider({
            animation: "slide",
            slideshow: !0,
            directionNav: !1,
            controlNav: !0,
            pauseOnAction: !1,
            animationSpeed: 500
        }),
        e(".offer-slider").flexslider({
            animation: "slide",
            slideshow: !0,
            directionNav: !0,
            controlNav: !1,
            pauseOnAction: !1,
            animationSpeed: 1e3
        });
    var o = e(".mobile-but"),
        i = e(".main-nav ul");
    i.height();
    e(o).on("click", function () {
            return e(".toggle-mobile-but").toggleClass("active"), i.slideToggle(), e(".main-nav li a").addClass("mobile"), !1
        }),
        e(window).resize(function () {
            e(window).width() > 320 && i.is(":hidden") && (i.removeAttr("style"), e(".main-nav li a").removeClass("mobile"))
        }),
        e(".main-nav li a").on("click", function () {
            e(this).hasClass("mobile") && (i.slideToggle(), e(".toggle-mobile-but").toggleClass("active"))
        }),
        e(".background-img").each(function () {
            var t = e(this).children("img").attr("src");
            e(this).css("background-image", 'url("' + t + '")').css("background-position", "initial")
        }),
        e(".block-tabs").on("click", "li", function () {
            if (!e(this).hasClass("active")) {
                var t = e(this).index() + 1;
                e(".block-tabs li.active").removeClass("active"), e(this).addClass("active"), e(".block-tab li.active").removeClass("active"), e(".block-tab li:nth-child(" + t + ")").addClass("active")
            }
        }),
        e(".popup-image").magnificPopup({
            type: "image",
            fixedContentPos: !1,
            fixedBgPos: !1,
            mainClass: "mfp-no-margins mfp-with-zoom",
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        }),
        e(".popup-youtube, .popup-vimeo").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }),
        e(".block-masonry").masonry({
            itemSelector: ".block-item-masonry"
        })
}

(jQuery);