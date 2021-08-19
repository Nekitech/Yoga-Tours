$(document).ready(function (param) {
    $('.slider-one').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true
                }
            }
        ]
    })
    $('.slider-double').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 1000,
        dots: true

    })
    $('.slider-reviews').slick({
        slidesToShow: 1,
        infinite:false,
        arrows: true,
        slidesToScroll: 1,
        dots: true,
        

    })

})