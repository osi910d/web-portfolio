$(function(){
  $(".signUp-benefit").on("click", function(){
    $(".benefit-popup-bg").addClass('on');
    $(".benefit-popup").addClass('on');
    $(".store-list-wrap").addClass('on');
    $(".nav-store").addClass('on');
  });
  $(".benefit-popup-bg, .benefit-popup-close").on("click", function(){
    $(".benefit-popup").removeClass('on');
    $(".benefit-popup-bg").removeClass('on');
    $(".benefit-store-list").removeClass('on');
    $(".benefit-member-box").removeClass('on');
    $(".benefit-member-nav>li").removeClass('on');
    $(".benefit-store-nav>li").removeClass('on');
  });
  $(".benefit-btn-green").on("click", function(){
    $(".benefit-green").addClass('on');
    $(".nav-green").addClass('on');
  });
  $(".benefit-btn-blue").on("click", function(){
    $(".benefit-blue").addClass('on');
    $(".nav-blue").addClass('on');
  });
  $(".benefit-btn-gold").on("click", function(){
    $(".benefit-gold").addClass('on');
    $(".nav-gold").addClass('on');
  });
  $(".benefit-btn-enterprise").on("click", function(){
    $(".benefit-enterprise").addClass('on');
    $(".nav-enterprise").addClass('on');
  });
  $(".nav-green").on("click", function(){
    $(".benefit-member-box").removeClass('on');
    $(".benefit-member-nav>li").removeClass('on');
    $(".benefit-green").addClass('on');
    $(".store-list-wrap").addClass('on');
    $(".nav-green").addClass('on');
  });
  $(".nav-blue").on("click", function(){
    $(".benefit-member-box").removeClass('on');
    $(".benefit-member-nav>li").removeClass('on');
    $(".benefit-blue").addClass('on');
    $(".store-list-wrap").addClass('on');
    $(".nav-blue").addClass('on');
  });
  $(".nav-gold").on("click", function(){
    $(".benefit-member-box").removeClass('on');
    $(".benefit-member-nav>li").removeClass('on');
    $(".benefit-gold").addClass('on');
    $(".store-list-wrap").addClass('on');
    $(".nav-gold").addClass('on');
  });
  $(".nav-enterprise").on("click", function(){
    $(".benefit-member-box").removeClass('on');
    $(".benefit-member-nav>li").removeClass('on');
    $(".benefit-enterprise").addClass('on');
    $(".nav-enterprise").addClass('on');
  });
  $(".nav-store").on("click", function(){
    $(".benefit-store-list").removeClass('on');
    $(".benefit-store-nav>li").removeClass('on');
    $(".store-list-wrap").addClass('on');
    $(".nav-store").addClass('on');
  });
  $(".nav-shopping").on("click", function(){
    $(".benefit-store-list").removeClass('on');
    $(".benefit-store-nav>li").removeClass('on');
    $(".shopping-list-wrap").addClass('on');
    $(".nav-shopping").addClass('on');
  });
});