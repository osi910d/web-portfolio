$(function () {
  var videoCount = 0;
  $(".video-btn").on("click", function () {
    if (videoCount == 0) {
      $(this).addClass('on');
      $(".second-banner__video").get(0).pause();
      videoCount++;
    } else if (videoCount == 1) {
      $(this).removeClass('on');
      $(".second-banner__video").get(0).play();
      videoCount--;
    }
  });
  $(".second-banner__link").on("mouseenter", function(){
    $(this).children('span').removeClass('rotate-0-scale-down').addClass('rotate-45-scale-up');
  });
  $(".second-banner__link").on("mouseleave", function(){
    $(this).children('span').removeClass('rotate-45-scale-up').addClass('rotate-0-scale-down');
  });
});