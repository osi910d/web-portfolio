(function (win, $) {
  var $html = $("html");
  var deviceSize = {
    pc: 1009,
    tablet: 701,
    mobile: 700
  };

  function scrollShowHide(status) {
    $html.css({
      "overflow-y": status
    });
    return $html.width();
  }

  var sc_w1 = scrollShowHide("hidden"),
    sc_w2 = scrollShowHide("scroll"),
    sc_w3 = sc_w1 - sc_w2;

  if (sc_w3 > 0) {
    deviceSize.pc = deviceSize.pc - sc_w3;
    deviceSize.tablet = deviceSize.tablet - sc_w3;
    deviceSize.mobile = deviceSize.mobile - sc_w3;
  }

  $(win).on("resize", function () {
    var w_size = $(win).width();
    if (w_size >= deviceSize.pc && !$("html").hasClass("pc")) {
      $html.removeClass("tablet mobile").addClass("pc");
      scrollShowHide("scroll");
      $(".header__btn--close").hide();
      $(".header__btn--open").hide();
      $(".header__nav").animate({
        "left": "-700px"
      }, 200);
      $(".gnb__sub-menu:visible").slideUp(300);
    } else if (w_size < deviceSize.pc && w_size >= deviceSize.tablet && !$("html").hasClass("tablet")) {
      $html.removeClass("pc mobile").addClass("tablet");
      scrollShowHide("scroll");
      $(".header__btn--close").hide();
      $(".header__btn--open").hide();
      $(".header__nav").animate({
        "left": "-700px"
      }, 200);
      $(".gnb__sub-menu:visible").slideUp(300);
    } else if (w_size <= deviceSize.mobile && !$html.hasClass("mobile")) {
      $html.removeClass("pc tablet").addClass("mobile");
      var menu_pos = parseInt($(".header__nav").css("left"));
      if (menu_pos >= 0) {
        scrollShowHide("hidden");
      }
      $(".header__btn--open").show();
    }
  });

  $(function () {
    $(win).trigger("resize");

    $(document).on("mouseenter focus", ".pc .gnb__menu>li>a, .tablet .gnb__menu>li>a", gnbPlay);
    $(document).on("click", ".mobile .gnb__menu>li>a", gnbPlay);

    function gnbPlay() {
      var $ts = $(this);
      if ($("html").hasClass("mobile")) {
        $(".gnb__sub-menu:visible").slideUp(300);
        if ($ts.next().is(":hidden")) {
          $ts.next().stop(true, true).slideDown(300);
        }
      } else {
        $(".gnb__sub-menu").slideDown(300);
        $(".gnb__sub-menu--background").slideDown(300);
      }
    }

    $(document).on("mouseleave", " .pc .gnb, .tablet .gnb", gnbEnd);

    function gnbEnd() {
      $(".gnb__sub-menu").slideUp(300);
      $(".gnb__sub-menu--background").slideUp(300);
    }

    $(document).on("click", ".header__btn--open", gnbOpen);

    function gnbOpen() {
      $(".header__nav").animate({
        "left": 0
      }, 200);
      scrollShowHide("hidden");
      $(this).hide();
      $(".header__btn--close").show();
      $("body").addClass('on');
      $(".header").addClass('mob');
    }

    $(document).on("click", ".header__btn--close", gnbClose);

    function gnbClose() {
      $(".header__nav").animate({
        "left": "-700px"
      }, 200);
      scrollShowHide("scroll");
      $(this).hide();
      $(".header__btn--open").show();
      gnbEnd();
      $("body").removeClass('on');
      $(".header").removeClass('mob');
    
    }
  });
}(window, jQuery));

$(function(){
  $("a").on("click", function(e){
    var attrA = $(this).attr("href");
    if(attrA == "#") {
      e.preventDefault();
    }
  });


});