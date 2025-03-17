$(function () {
  // main-slider
  $(".slider").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    customPaging: function (slider, i) {
      return '<div class="custom-dot"></div>';
    },
    dots: true,
    arrows: true,
    appendDots: $(".slide-custom-dot"),
    prevArrow: $(".slide-prev-btn"),
    nextArrow: $(".slide-next-btn"),
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    centerMode: false,
    pauseOnHover: false,
    vertical: false,
    useTransform: false, // 슬라이드 깜빡거리는 현상 제거
  });

  $(".slide-autoplay-btn").click(function () {
    if ($(this).hasClass("on")) {
      $(".slider").slick("slickPlay");
      $(this).html('<div class="slide-pause"></div>');
    } else {
      $(".slider").slick("slickPause");
      $(this).html('<div class="slide-play"></div>');
    }
    $(this).toggleClass("on");
  });

  // solution-slider
  $(".solution-slider").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    dots: false,
    arrows: true,
    prevArrow: $(".solution-slide-prev"),
    nextArrow: $(".solution-slide-next"),
    autoplay: false,
    autoplaySpeed: 2000,
    fade: true,
    draggable: false,
    centerMode: false,
    pauseOnHover: false,
    vertical: false,
    useTransform: false,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1200,
        settings: {
          row: 2,
        },
      },
    ],
  });

  // work experience
  var years = $(".work-experience-years");
  var years_mobie = $(".work-experience-years-mobile .tab .tab-item");
  var years_content = $(".work-experience-years-contents-wrap");

  years_content.hide();
  years_content.eq(0).show();

  years.click(function () {
    years.removeClass("active");
    $(this).addClass("active");

    years_content.hide();
    var index = years.index(this);
    years_content.eq(index).show();
  });

  years_mobie.click(function () {
    years_mobie.removeClass("active");
    $(this).addClass("active");

    years_content.hide();
    var index = years_mobie.index(this);
    years_content.eq(index).show();
  });

  // contact tab
  $(function () {
    var tab_content = $(".contact-tab ul li");
    var map_content = $(".contact-map ul li");

    map_content.hide();
    $("#tab01").show();

    // var isRenderedTab01 = false;
    // var isRenderedTab02 = false;

    // 카카오맵 다시 렌더링
    // function renderDaumMap(mapContainerId, timestamp, mapKey) {
    //   new daum.roughmap.Lander({
    //     timestamp: timestamp,
    //     key: mapKey,
    //     mapHeight: "500",
    //   }).render();
    // }

    tab_content.click(function () {
      var target = $(this).find("a").attr("href");

      map_content.hide();
      $(target).fadeIn();

      tab_content.removeClass("active");
      $(this).addClass("active");

      // if (target === "#tab01" && !isRenderedTab01) {
      //   renderDaumMap(
      //     "daumRoughmapContainer1728568623831",
      //     "1728568623831",
      //     "2kuun"
      //   );
      //   isRenderedTab01 = true;
      // } else if (target === "#tab02" && !isRenderedTab02) {
      //   renderDaumMap(
      //     "daumRoughmapContainer1728722923138",
      //     "1728722923138",
      //     "2kvfw"
      //   );
      //   isRenderedTab02 = true;
      // }

      return false;
    });
  })
    .filter(":eq(0)")
    .click();
});
