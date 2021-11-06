$(document).ready(function () {
    $("#navbar-toggle").click(function () {
        $('#responsive-menu').slideToggle();
    });
    function hide__responsive_menu() {
        $('#responsive-menu').slideUp();
    }
    $(window).resize(function () {
        hide__responsive_menu()
    });
    $(window).scroll(function () {
        hide__responsive_menu()
    });
});