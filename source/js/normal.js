$(document).ready(function () {

  // 헤더 스크롤
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('scroll');
    } else {
      $('.header').removeClass('scroll');
    }
  });

  //메인 비주얼 슬라이드
  var mainSwiper = new Swiper(".main-vs-slider", {
    // allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    effect: "fade",
    speed: 600,
    navigation: {
      nextEl: ".mainvs-button-next",
      prevEl: ".mainvs-button-prev",
    },
    on: {
      init: function () {
        $(".mainvs-timer-wr").removeClass("animate");
        $(".mainvs-timer-wr").removeClass("active");
        $(".mainvs-timer-wr").eq(0).addClass("animate");
        $(".mainvs-timer-wr").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".mainvs-timer-wr").removeClass("animate");
        $(".mainvs-timer-wr").removeClass("active");
        $(".mainvs-timer-wr").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".mainvs-timer-wr").eq(0).addClass("animate");
      }
    },
  });

  //산업 VOD 카테고리 슬라이드
  var vodSwiper = new Swiper(".main-indvod-slider", {
    // loop: true,
    speed: 600,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    navigation: {
      nextEl: ".main-indvod-next",
      prevEl: ".main-indvod-prev",
    },
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true,
    breakpoints: {
      // 330: {
      //   slidesPerView: 5,
      // },
      380: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });

  $('.main-indvod-circle').click(function () {
    let target = $(this).parent('.main-indvod-sl');
    $('.main-indvod-sl').removeClass('on');
    target.addClass('on');

  });

  // 방송 프로그램 슬라이드
  var proSwiper = new Swiper(".main-program-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".main-program-button-next",
      prevEl: ".main-program-button-prev",
    },
    breakpoints: {
      331: {
        slidesPerView: 2,
      },
      481: {
        slidesPerView: 3,
      },
      768: {
        // slidesPerView: 6, 
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // 메인 하단 파트너 슬라이드
  var partSwiper = new Swiper(".main-partner-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 600,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".main-partner-button-next",
      prevEl: ".main-partner-button-prev",
    },
    breakpoints: {
      331: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      481: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1291: {
        slidesPerView: 7,
        spaceBetween: 60,
      },
    },
  });

  $('.main-partner-button-pause').on('click', function () {
    if ($(this).hasClass('stop')) {
      partSwiper.autoplay.stop();
      $(this).addClass('start');
      $(this).removeClass('stop');
      $(this).children('img').attr('src', '/source/img/icon-play.png');
      $(this).children('img').attr('alt', '다시재생');
    } else if ($(this).hasClass('start')) {
      partSwiper.autoplay.start();
      $(this).addClass('stop');
      $(this).removeClass('start');
      $(this).children('img').attr('src', '/source/img/icon-pause.png');
      $(this).children('img').attr('alt', '일시정지');
    }
  });


  // 메인 하단 공지사항 슬라이드
  $(window).on('load', function(){
    var notiSwiper = new Swiper(".main-notice-slider", {
      loop: true,
      direction: "vertical",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".main-notice-movebtn--next",
        prevEl: ".main-notice-movebtn--prev",
      },
    });
  });

  //산업 VOD 카테고리 슬라이드
  var program01Swiper = new Swiper(".program01-slider", {
    // loop: true,
    speed: 600,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    navigation: {
      nextEl: ".program01-next",
      prevEl: ".program01-prev",
    },
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true,
    breakpoints: {
      // 330: {
      //   slidesPerView: 5,
      // },
      380: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });

  $('.program01-circle').click(function () {
    let target = $(this).parent('.program01-sl');
    $('.program01-sl').removeClass('on');
    target.addClass('on');

  });

  // 프로그램 페이지 탭 스크롤
  $(window).scroll(function () {
    var proSecWr = $(".program-section.anchor");
    var s = $(window).scrollTop();

    proSecWr.each(function (index) {
      var sectionTop = $(this).offset().top - 300;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (s >= sectionTop && s < sectionBottom) {
        $(".program-top-btn").removeClass("active");
        $(".program-top-btn:eq(" + index + ")").addClass("active");
      }
    });
  })

  // 진행자 소개 슬라이드
  var mcSwiper = new Swiper(".program-mc-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".program-mc-button-next",
      prevEl: ".program-mc-button-prev",
    },
    breakpoints: {
      1291: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  // 회사 소개 슬라이드
  var mcSwiper = new Swiper(".about-slider", {
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    speed: 600,
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: ".about-button-next",
      prevEl: ".about-button-prev",
    },
    breakpoints: {
      1291: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
    },
  });

  //matchHeight
  $(".match_h > *").matchHeight();

  // AOS
  $(function () {
    AOS.init({
      duration: 1000
    });
  });

  $(window).on("scroll", function () {
    AOS.init();
  });


});