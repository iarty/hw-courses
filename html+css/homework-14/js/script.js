$(document).ready(function () {
    $('#nav-btn').click(function () {
        $('#main-nav').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } else {
            $(this).addClass('not-active').removeClass('is-active');
        }
    });
    $(window).resize(function () {
        if ($(window).width() >= 781) {
            $('#main-nav').attr('style', 'display:inline-block');
        } else {
            $('#main-nav').attr('style', 'display:none');
        }
    });
});