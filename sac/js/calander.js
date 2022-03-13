$(function () {
  $(".hall-nav>li").on("click", function () {
    var $nav = $(this).index();
    $(".hall-nav>li").removeClass('on');
    $(".calander-box").removeClass('on');
    $(".mob-schedule__list").removeClass('on');
    $(".mob-schedule__list").empty();
    if ($nav == 0) {
      $(".cb-musicHall").addClass('on');
      $(this).addClass('on');
    } else if ($nav == 1) {
      $(".cb-operaHouse").addClass('on');
      $(this).addClass('on');
    } else if ($nav == 2) {
      $(".cb-artGallery").addClass('on');
      $(this).addClass('on');
    }
  });
  var year = 2022;
  var month = 1;
  var $sbFirst = $(".calander-box.on .schedule-box-wrap .schedule-box:first-child");
  var $sbLast = $(".calander-box.on .schedule-box-wrap .schedule-box:last-child");
  $(".calander-date>button").on("click", function () {
    $(".calander-box.on .calander-date__month").addClass('scale-up-ver-top');
    $(".mob-schedule__list").removeClass('on');
    $(".mob-schedule__list").empty();
    var $sbOn = $(".schedule-box-wrap .schedule-box.on");
    if ($(this).index() == 3) {
      if ($sbOn.index() < $sbLast.index()) {
        $sbOn.next().addClass('on');
        $sbOn.removeClass('on')
        month++;
        if (month == 13) {
          month = 1;
          year++;
          $(".calander-date__year>p").text(year);
          $(".calander-box.on .calander-date__year").addClass('scale-up-ver-top');
          setTimeout(function () {
            $(".calander-date__year").removeClass('scale-up-ver-top');
          }, 800);
        }
        $(".calander-date__month>p").text(month);
      }
    } else if ($(this).index() == 0) {
      if ($sbOn.index() > $sbFirst.index()) {
        $sbOn.prev().addClass('on');
        $sbOn.removeClass('on');
        month--;
        if (month == 0) {
          month = 12;
          year--;
          $(".calander-date__year>p").text(year);
          $(".calander-box.on .calander-date__year").addClass('scale-up-ver-top');
          setTimeout(function () {
            $(".calander-date__year").removeClass('scale-up-ver-top');
          }, 800);
        }
        $(".calander-date__month>p").text(month);
      }
    }
    setTimeout(function () {
      $(".calander-date__month").removeClass('scale-up-ver-top');
    }, 800);
  });
  $(".mobile-schedule-check").on("click", function () {
    var $list = $(this).prev().html();
    $(".calander-box.on .schedule-box.on .mob-schedule__list").html($list);
    $(".calander-box.on .schedule-box.on .mob-schedule__list").addClass('on');
  });
});