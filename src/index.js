var mainNav = document.getElementById("main-nav");
var toggleMenuIcon = document.getElementById("toggle-menu-icon");

function toggleMenu() {
    mainNav.classList.toggle('hidden');

    // change the icon when the menu is shown/closed
    toggleMenuIcon.classList.toggle('fa-bars');
    toggleMenuIcon.classList.toggle('fa-times');
}
