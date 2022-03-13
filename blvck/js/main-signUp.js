$(function () {
  var tCon = $(".tos-container");
  $('section').on("click", function (e) {
   var tTop = tCon.scrollTop(0);
    if ($(e.target).hasClass("tos-link")) {
      $(".tos-wrap").show();
    } else {
      $(".tos-wrap:visible").hide();
    }
  });


  $(".agree-btn").on("click", function () {
    var tTop = tCon.scrollTop(0);
    $("#checkbox").prop("checked", true);
    $(".tos-wrap:visible").hide();
  });
  $(".decline-btn").on("click", function () {
    var tTop = tCon.scrollTop(0);
    $("#checkbox").prop("checked", false);
    $(".tos-wrap:visible").hide();
  });

  // var Tcon = $(".TOS-container");
  // var Ttop = Tcon.scrollTop()
  // console.log(Ttop);


});