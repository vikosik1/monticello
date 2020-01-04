$(document).ready(function() {
        $('.ba-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            infinite: false,
            arrows: false,
            speed: 300,
        });

        $('.ba-slider-news').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            infinite: false,
            arrows: true,
            speed: 300,
        });


        $("nav li a").click(function() {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $("body,html").animate({ scrollTop: destination }, 800);
        });
        $(".ba-header-scroll a").click(function() {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $("body,html").animate({ scrollTop: destination }, 800);
        });


        jQuery(function() {
            $("a").hover(function() {
                    $(this).stop().animate({ opacity: '.3' })
                },
                function() { $(this).stop().animate({ opacity: '2.3' }) }
            );

        });



    })
    // let map;
    // function initMap() {
    //     var coordinates = { lat: 47.212325, lng: 38.933663 },

//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates
//         }),
//         image = 'src/marker.png',
//         marker = new google.maps.Marker({
//             position: coordinates,
//             map: map,
//             icon: image,
//             animation: google.maps.Animation.BOUNCE
//         });
// }