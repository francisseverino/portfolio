// Show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

// Set Active link and Remove Menu

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Dark - Light mode

document.addEventListener('DOMContentLoaded', function (event) {
  document.documentElement.setAttribute('data-theme', 'light');

  const themeSwitcher = document.getElementById('theme-switcher');
  const themeSwitcherIcon = themeSwitcher.getElementsByClassName('bx')[0];

  themeSwitcher.onclick = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      switchToTheme = 'light';
      themeSwitcherIcon.classList.remove('bx-moon');
      themeSwitcherIcon.classList.add('bx-sun');
    } else {
      switchToTheme = 'dark';
      themeSwitcherIcon.classList.add('bx-sun');
      themeSwitcherIcon.classList.remove('bx-moon');
    }

    document.documentElement.setAttribute('data-theme', switchToTheme);
  };
});
