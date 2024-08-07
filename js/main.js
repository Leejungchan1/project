$(function () {

    //pc 메뉴
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

    
    //m 메뉴
    $(".menu-toggle-btn").click(function(){
        $(this).toggleClass("on")
        $(".m_main").slideToggle();
    })

    $(".m_main > li").hover(function(){
        $(this).children(".m_sub").css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 500);
    },function(){
        $(".m_sub").fadeOut(200);
    })

    $(".m_sub > li").hover(function(){
        $(this).children(".m_sub_in").stop().slideDown("slow");
    },function(){
        $(".m_sub_in").stop().slideUp("slow");
    })









    //메인슬라이드
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





    


    //인기 상품
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
                centerPadding: "105px",
                }
            }
        ]

    })




    //팝업
    $(".close").click(function(){
        $(".popup").hide()
    })


    

    //a태그 이벤트 중지
    $("a").click(function(event){
        event.preventDefault();
    })



})