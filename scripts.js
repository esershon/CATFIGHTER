$(document).ready(function () {
    $("select, .vs").hide();
    $("img.cat").hide();
    $("button.background").mouseover(function () {
        if ($(this).hasClass("box")) {
            $(".arena").css("background-image", "url(img/box.jpg)")
        }
        if ($(this).hasClass("burgers")) {
            $(".arena").css("background-image", "url(img/burgers.jpg)")
        }
        if ($(this).hasClass("vases")) {
            $(".arena").css("background-image", "url(img/vases.jpg)")
        }
        if ($(this).hasClass("yarn")) {
            $(".arena").css("background-image", "url(img/yarn.jpg)")
        }
        if ($(this).hasClass("counter")) {
            $(".arena").css("background-image", "url(img/counter.jpg)")
        }
        if ($(this).hasClass("space")) {
            $(".arena").css("background-image", "url(img/space.jpg)")
        }
    })
    var handler = function () {
        $(".arena").css("background-image", "url(img/black.png)");
    }
    $("button.background").mouseout(handler)

    $("button.background").click(function () {
        $("button.background").unbind("mouseout", handler);
        $("button.background").hide();
        $("select, .vs").show();
        $("h1").html("Select Cats")
        console.log("CHOOSE YOUR CAT!");
    })
    $("select.player1").change(function () {
        var player1 = $(this).val();
        $(".player1catbox").html("<img class='cat' src='img/" + player1 + "' alt='cat gif'>")
        // $(".cat").css("text-align", "center")
        console.log(player1);
    })
    $("select.player2").change(function () {
        var player2 = $(this).val();
        $(".player2catbox").html("<img class='cat' src='img/" + player2 + "' alt='cat gif'>")
        console.log(player2);
    })

})