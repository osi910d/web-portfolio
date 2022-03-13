$(function () {
  $(".models-list>li").on("click", function () {
    $(".models-list>li").removeClass('on');
    $(".models-sub-list").removeClass('on');
    $(this).addClass('on');
    $(this).children('.models-sub-list').addClass('on');
  });

  var modelsCount = 0;
  $(".models-box>span").on("click", function () {
    if (modelsCount == 0) {
      $(".models-nav").slideDown();
      $(".models-bg").addClass('on');
      $("body").addClass('on');
      modelsCount++;
    } else if (modelsCount == 1) {
      $(".models-nav").slideUp();
      $(".models-bg").removeClass('on');
      $("body").removeClass('on');
      modelsCount--;
    }
  });
  $(".models-nav__close").on("click", function () {
    $(".models-nav").slideUp();
    $(".models-bg").removeClass('on');
    $("body").removeClass('on');
    modelsCount--;
  });
  $(".gnb-sns img").on("mouseenter", function () {
    $(this).addClass('slide-top');
  });
  $(".gnb-sns img").on("mouseleave", function () {
    $(this).removeClass('slide-top');
  });

  $(".menu-btn").on("click", function () {
    $(".gnb").animate({
      'right': '+=400px'
    }, 200);
    $("body").addClass('on');
    $(".gnb-bg").addClass('on');
  });

  $(".gnb__close-btn").on("click", function () {
    $(".gnb").animate({
      'right': '-400px'
    }, 200);
    $("body").removeClass('on');
    $(".gnb-bg").removeClass('on');
    setTimeout(function () {
      $(".gnb-box").css({
        'right': '0px'
      });
      $(".gnb-logo").addClass('on');
      $(".gnb__prev-btn").removeClass('on');
      $(".gnb-title").removeClass('on');
    }, 300);
  });
  $(".gnb-bg").on("click", function(){
    $(".gnb").animate({
      'right': '-400px'
    }, 200);
    $("body").removeClass('on');
    $(".gnb-bg").removeClass('on');
    setTimeout(function () {
      $(".gnb-box").css({
        'right': '0px'
      });
      $(".gnb-logo").addClass('on');
      $(".gnb__prev-btn").removeClass('on');
      $(".gnb-title").removeClass('on');
    }, 300);
  });

  var gnbCount = 0;

  $(".gnb__prev-btn").on("click", function () {
    gnbCount--;
    $(".gnb-box").animate({
      'right': '-=400px'
    }, 200);
    if (gnbCount == 0) {
      $(".gnb-logo").addClass('on');
      $(".gnb-title").removeClass('on');
      $(".gnb__prev-btn").removeClass('on');
      $(".gnb-sub").removeClass('on');
    } else if (gnbCount == 1) {
      $(".gnb-third").removeClass('on');
      $(".gnb-title").text("Change Location");
    }
  });


  $(".gnb-item__box").on("click", function () {
    var gnbItemTitle = $(this).children('.gnb-item__title').text();
    var ppClassName = $(this).parent().parent().attr('class');
    gnbCount++;
    if (ppClassName == "gnb-list") {
      $(".gnb-title").text(gnbItemTitle);
    } else if (ppClassName == "gnb-site") {
      $(".gnb-title").text("Change Location");
    }
    $(this).siblings('.gnb-sub').addClass('on');


    $(".gnb-box").animate({
      'right': '+=400px'
    }, 200);
    $(".gnb__prev-btn").addClass('on');
    $(".gnb-title").addClass('on');
    $(".gnb-logo").removeClass('on');
  });

  $(".sub-item__box").on("click", function () {
    var subItemTitle = $(this).children('.sub-item__title').text();
    gnbCount++;
    $(".gnb-title").text(subItemTitle);
    $(this).siblings('.gnb-third').addClass('on');
    $(".gnb-box").animate({
      'right': '+=400px'
    }, 200);
  });

  $("a").on("click", function(e){
    var attrA = $(this).attr("href");
    if(attrA == "#") {
      e.preventDefault();
    }
  });

});