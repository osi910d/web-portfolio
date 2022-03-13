$(function () {

    var num = [0, 0, 0, 0, 0, 0, 0];
    var i = 0;
    var price = 230;
    var $box;
    var total = [0, 0, 0, 0, 0, 0, 0];
    var n = 0;
    $(".select-size>ul>li").on("click", function () {
        $(this).css({
            "background-color": "#000",
            "color": "#fff"
        });
        i = $(this).index();
        if (num[i] === 0) {
            $box = $(".selected-item-container:first-child").clone(true);
            var txt = $(this).text();
            $box.find(".size").text(txt);
            $box.css({
                "display": "block"
            });
            $(".selected-item-dock").append($box);
            num[i]++;
            total[i] = num[i] * price;
            total_price = total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6];
            $(".total-price").text(total_price);
            $box.find(".q-btn>span").text(num[i]);
            $box.find(".item-price span").text(total[i]);
        } else {
            alert("동일한 상품을 선택하셨습니다. 수량을 변경해 주시기 바랍니다.");
        }


    });

    $(".selected-item-box button").on("click", function () {
        var $sizeTxt = $(this).closest(".selected-item-box").children(".item_size").children(".size").text();

        if ($sizeTxt === "XXS") {
            i = 0;
        } else if ($sizeTxt === "XS") {
            i = 1;
        } else if ($sizeTxt === "S") {
            i = 2;
        } else if ($sizeTxt === "M") {
            i = 3;
        } else if ($sizeTxt === "L") {
            i = 4;
        } else if ($sizeTxt === "XL") {
            i = 5;
        } else if ($sizeTxt === "XXL") {
            i = 6;
        }
        if ($(this).hasClass("close-btn")) {
            $(this).closest(".selected-item-container").remove();
            $(".select-size>ul>li").eq(i).css({
                "background-color": "transparent",
                "color": "#000"
            });
            num[i] = 0;
            total[i] = num[i] * price;
            total_price = total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6];
            $(".total-price").text(total_price);
        } else if ($(this).hasClass("q-plus")) {
            var $box2 = $(this).closest(".selected-item-box");
            num[i]++;
            $box2.find(".q-btn>span").text(num[i]);
            total[i] = num[i] * price;
            $box2.find(".item-price span").text(total[i]);
            total_price = total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6];
            $(".total-price").text(total_price);
        } else if ($(this).hasClass("q-minus")) {
            var $box2 = $(this).closest(".selected-item-box");
            if (num[i] > 1) {
                num[i]--;
                $box2.find(".q-btn>span").text(num[i]);
                total[i] = num[i] * price;
                $box2.find(".item-price span").text(total[i]);
                total_price = total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6];
                $(".total-price").text(total_price);
            }
        }
    });
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
    $(document).on("scroll", function () {
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
});