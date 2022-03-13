$(function(){
    $('.updown-btn-wrap>div').on('mouseover', function () {
        $(this).children().css({
          'border-color': '#000'
        });
      });
    
      $('.updown-btn-wrap>div').on('mouseleave', function () {
        $(this).children().css({
          'border-color': '#fff'
        });
      });
    
      $(".up-btn").on("click", function () {
        $("html,body").animate({
          scrollTop: 0
        }, 400);
      });
    
      $(".down-btn").on("click", function () {
        $("html,body").animate({
          scrollTop: 8912
        }, 400);
      });

      $(document).on("scroll", function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= 900) {
          $(".updown-btn-wrap").css({
            "display": "block"
          });
        } else {
          $(".updown-btn-wrap").css({
            "display": "none"
          });
        }
    });
});
