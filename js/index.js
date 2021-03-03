
// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


// Set Active link and Remove Menu

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Dark - Light mode

document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");

    const themeSwitcher = document.getElementById("theme-switcher");

    themeSwitcher.onclick = function() {

      const currentTheme = document.documentElement.getAttribute("data-theme");
      const switchToTheme = currentTheme === "dark" ? "light" : "dark"

      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });