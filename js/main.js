$(function(){
    $(".left_move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:2,
        dots:true,
        arrows:false,
    })

    $(".fav_move").slick({
        autoplay:true,
        autoplaySpeed:1500,
        slidesToShow:4,
        dots:false,
        arrows:false,
        centerMode:true,
    })

    
})