$(function () {
  var switchCount = 0;
  $(".switch-btn").on("click", function () {
    if (switchCount == 0) {
      $(".board").removeClass('dark');
      switchCount++;
    } else if (switchCount == 1) {
      $(".board").addClass('dark');
      switchCount--;
    }
  });

  var infoGraphic = $(".info-graphic");

  function animateIG() {
    infoGraphic.each(function () {
      var item = $(this);
      var value = item.find('h2');
      var targetNum = value.attr('data-num');
      var circle = item.find('circle');

      $({
        rate: 0
      }).animate({
        rate: targetNum
      }, {
        duration: 2000,
        progress: function () {
          var now = this.rate;
          var amount = 220 - (220 * now / 100);
          value.text(Math.floor(now));
          circle.css({
            strokeDashoffset: amount + '%'
          });
        }
      });
    });
  };

  $(".board-bg, .board-bg__profile .close-btn").on("click", function () {
    $(".info-box.t").removeClass('slide-in-blurred-top').addClass('slide-out-blurred-top');
    $(".info-box.tl").removeClass('slide-in-blurred-tl').addClass('slide-out-blurred-tl');
    $(".info-box.tr").removeClass('slide-in-blurred-tr').addClass('slide-out-blurred-tr');
    $(".info-box.b").removeClass('slide-in-blurred-bottom').addClass('slide-out-blurred-bottom');
    $(".info-box.bl").removeClass('slide-in-blurred-bl').addClass('slide-out-blurred-bl');
    $(".info-box.br").removeClass('slide-in-blurred-br').addClass('slide-out-blurred-br');

    setTimeout(function () {
      $(".board-bg").removeClass('on');
      $(".board-bg__profile").removeClass('on');
      $(".profile-board").removeClass('on');
    }, 600);
  });

  $(".profile").on("click", function () {
    $(".board-bg").addClass('on');
    $(".board-bg__profile").addClass('on');
    $(".profile-board").addClass('on');
    $(".info-box.t").removeClass('slide-out-blurred-top').addClass('slide-in-blurred-top');
    $(".info-box.tl").removeClass('slide-out-blurred-tl').addClass('slide-in-blurred-tl');
    $(".info-box.tr").removeClass('slide-out-blurred-tr').addClass('slide-in-blurred-tr');
    $(".info-box.b").removeClass('slide-out-blurred-bottom').addClass('slide-in-blurred-bottom');
    $(".info-box.bl").removeClass('slide-out-blurred-bl').addClass('slide-in-blurred-bl');
    $(".info-box.br").removeClass('slide-out-blurred-br').addClass('slide-in-blurred-br');
    animateIG();
  });

  $(".profile").on("mouseenter", function () {
    $(".profile__icon").removeClass('slide-bottom').addClass('slide-top');
    $(".profile__title>h2").removeClass('tracking-out-contract').addClass('tracking-in-contract');
  });
  $(".profile").on("mouseleave", function () {
    $(".profile__icon").removeClass('slide-top').addClass('slide-bottom');
    $(".profile__title>h2").removeClass('tracking-in-contract').addClass('tracking-out-contract');
  });
  $(".project").on("mouseenter", function () {
    $(".project__icon").removeClass('slide-bottom').addClass('slide-top');
    $(".project__title>h2").removeClass('tracking-out-contract').addClass('tracking-in-contract');
  });
  $(".project").on("mouseleave", function () {
    $(".project__icon").removeClass('slide-top').addClass('slide-bottom');
    $(".project__title>h2").removeClass('tracking-in-contract').addClass('tracking-out-contract');
  });

  $(".project").on("click", function () {
    $(".board-bg").addClass('on');
    $(".board-bg__project").addClass('on');
    $(".project-board").addClass('on');
    $(".project-box.volvo").removeClass('slide-out-bck-bl').addClass('slide-in-bck-tl');
    $(".project-box.sac").removeClass('slide-out-bck-top').addClass('slide-in-bck-bottom');
    $(".project-box.bp").removeClass('slide-out-bck-br').addClass('slide-in-bck-tr');
  });

  $(".board-bg, .board-bg__project .close-btn").on("click", function () {
    $(".project-box.volvo").removeClass('slide-in-bck-tl').addClass('slide-out-bck-bl');
    $(".project-box.sac").removeClass('slide-in-bck-bottom').addClass('slide-out-bck-top');
    $(".project-box.bp").removeClass('slide-in-bck-tr').addClass('slide-out-bck-br');
    setTimeout(function () {
      $(".board-bg").removeClass('on');
      $(".board-bg__project").removeClass('on');
      $(".project-board").removeClass('on');
    }, 500);
  });

  $(".description-btn").on("click", function () {
    $(".project-bg").addClass('on');
    $(".project-description").addClass('on');
  });

  $(".bp .description-btn").on("click", function () {
    $(".bp-des").addClass('on');
  });
  $(".sac .description-btn").on("click", function () {
    $(".sac-des").addClass('on');
  });
  $(".volvo .description-btn").on("click", function () {
    $(".volvo-des").addClass('on');
  });

  $(".project-bg, .project-bg .close-btn").on("click", function () {
    $(".project-bg").removeClass('on');
    $(".project-description").removeClass('on');
    $(".project-description>div").removeClass('on');
  });







});