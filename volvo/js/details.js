$(function () {
  var videoCount = 0;
  $(".video-btn").on("click", function () {
    if (videoCount == 0) {
      $(this).addClass('on');
      $(".video-content").get(0).pause();
      videoCount++;
    } else if (videoCount == 1) {
      $(this).removeClass('on');
      $(".video-content").get(0).play();
      videoCount--;
    }
  });
  var btnCount = 0;
  var galleryLength = $(".gallery__box").length;
  $(".gallery .slider__count>p>span").text(btnCount + 1);
  $(".gallery .slider__btn--prev").on("click", function () {
    if (btnCount > 0) {
      btnCount--;
      $(".gallery .slider__container").css({
        "transform": "translateX(-" + (btnCount * 100) + "%)"
      });
      $(".gallery .slider__count>p>span").text(btnCount + 1);
    }
  });
  $(".gallery .slider__btn--next").on("click", function () {
    if (btnCount < galleryLength - 1) {
      btnCount++;
      $(".gallery .slider__container").css({
        "transform": "translateX(-" + (btnCount * 100) + "%)"
      });
      $(".gallery .slider__count>p>span").text(btnCount + 1);
    }
  });
  var btnCount2 = 0;
  var designLength = $(".design-box").length;
  $(".design .slider__count>p>span").text(btnCount2 + 1);
  $(".design .slider__btn--prev").on("click", function () {
    if (btnCount2 > 0) {
      btnCount2--;
      $(".design .slider__container").css({
        "transform": "translateX(-" + (btnCount2 * 100) + "%)"
      });
      $(".design .slider__count>p>span").text(btnCount2 + 1);
    }
  });
  $(".design .slider__btn--next").on("click", function () {
    if (btnCount2 < designLength - 1) {
      btnCount2++;
      $(".design .slider__container").css({
        "transform": "translateX(-" + (btnCount2 * 100) + "%)"
      });
      $(".design .slider__count>p>span").text(btnCount2 + 1);
    }
  });
  var btnCount3 = 0;
  var designLength = $(".safety-box").length;
  $(".safety .slider__count>p>span").text(btnCount3 + 1);
  $(".safety .slider__btn--prev").on("click", function () {
    if (btnCount3 > 0) {
      btnCount3--;
      $(".safety .slider__container").css({
        "transform": "translateX(-" + (btnCount3 * 100) + "%)"
      });
      $(".safety .slider__count>p>span").text(btnCount3 + 1);
    }
  });
  $(".safety .slider__btn--next").on("click", function () {
    if (btnCount3 < designLength - 1) {
      btnCount3++;
      $(".safety .slider__container").css({
        "transform": "translateX(-" + (btnCount3 * 100) + "%)"
      });
      $(".safety .slider__count>p>span").text(btnCount3 + 1);
    }
  });
});