$(document).ready(() => {
    // Top SP Menu
    $('#hamburger-1').click(function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass('is-active');
    });

    $('.dropdown-toggle').click(function() {
        $(this).next().slideToggle(300);
        $(this).toggleClass('active');
    });

    // Back to top button and header fixed
    const topBtn = $('.scrolltop');
    const headerFix = $('.header-fixed');
    topBtn.hide();

    $(window).scroll(() => {
        $(this).scrollTop() > 100 ? (topBtn.fadeIn(), headerFix.addClass('is-active')) : (topBtn.fadeOut(), headerFix.removeClass('is-active'));
    });

    topBtn.click(() => {
        $('body,html').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Smooth scroll for anchor links
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 500);
    });

});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}