$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() >= 765) {
            $('#script').addClass('wrapper')
        } else {
            $('#script').removeClass('wrapper')
        }
    });
    if ($(window).width() >= 765) {
        $('#script').addClass('wrapper')
    } else {
        $('#script').removeClass('wrapper')
    }
});