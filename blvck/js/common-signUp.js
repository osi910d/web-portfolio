$(function(){
    $('html').on("click", function (e) {
        if ($(e.target).hasClass("dropbtn")) {
          $(".dropdown-content:visible").hide();
          $(e.target).next().slideDown();
        } else {
          $(".dropdown-content:visible").hide();
        }
      });

      $(".country .dropdown-content li").on("click", function () {
        $(".country span").html($(this).text());
      });

      $("a").on("click", function(e){
        var attrA = $(this).attr("href");
        if(attrA == "#") {
          e.preventDefault();
        }
      });
});