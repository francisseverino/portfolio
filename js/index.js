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
  const themeSwitcherIcon = themeSwitcher.getElementsByClassName('far')[0];

  themeSwitcher.onclick = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      switchToTheme = 'light';
      themeSwitcherIcon.classList.remove('fa-sun');
      themeSwitcherIcon.classList.add('fa-moon');
    } else {
      switchToTheme = 'dark';
      themeSwitcherIcon.classList.remove('fa-moon');
      themeSwitcherIcon.classList.add('fa-sun');
    }

    document.documentElement.setAttribute('data-theme', switchToTheme);
  };
});

// Nav indicator highlight on scroll
const navIndicatorOnScroll = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(li => {
      li.classList.remove('active');
      if (li.href.includes(current)) {
        li.classList.add('active');
      }
    });
  });
};

navIndicatorOnScroll();
