$(function () {
    $(".main > li").hover(function(){
        $(this).children(".sub").css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 500);
    },function(){
        $(".sub").fadeOut(200);
    })

    $(".sub > li").hover(function(){
        $(this).children(".sub_in").stop().slideDown("slow");
    },function(){
        $(".sub_in").stop().slideUp("slow");
    })


    $(".left_move").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
                }
            ]
    })

    // })

    $(".fav_move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        // swipe:true,
        arrows:false,
        slidesToShow:5,
        centerMode:true,
        centerPadding: "-10px",
        responsive: [{
        breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "100px",
                }
            }
        ]

    })

    $(".close").click(function(){
        $(".popup").hide()
    })




})