'use strict';

const modalData = {
  'hw-todo': {
    title: 'HW Todo',
    description:
      'Created an application using Python framework Flask along with a group that helps students with assignments that synchronize with Canvas LMS and lets you add your own',
  },
  socialapp: {
    title: 'SocialApp',
    description:
      'Applied remarkable efficiency and developed a social application that allows people to chat, make friends, or date during the COVID-19 pandemic.',
  },
  autove: {
    title: 'Autove',
    description:
      'Demonstrated success in developing a mobile application to facilitate users in finding any parts, color codes, information, and more for any vehicle by using the app.',
  },
  flixo: {
    title: 'Flixo',
    description: 'Flixio React app that uses “themoviedb” API to display a catalog of movies and TV shows.',
  },
};

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

// Set Active link and Remove Menu
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  toggle.checked = false;
  navMenu.classList.remove('show');
};

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

const switchThemes = () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeSwitcherIcon = themeSwitcher.getElementsByClassName('far')[0];
  const currentTheme = document.documentElement.getAttribute('data-theme');

  let switchToTheme = '';
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

//Back to top button
const scrollTop = () => {
  const scrollTopButton = document.getElementById('scroll-top-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopButton.parentElement.classList.add('show');
    } else {
      scrollTopButton.parentElement.classList.remove('show');
    }
  });

  scrollTopButton.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

// Modal
const modal = () => {
  // Get the modal
  const modal = document.getElementById('modal');
  const projects = document.getElementsByClassName('project__button');
  const modalClose = document.getElementsByClassName('modal__close')[0];

  // When the user clicks on the button, open the modal
  for (let project of projects) {
    project.onclick = function () {
      modal.style.display = 'block';
      const { id } = this.dataset;
      console.log(id);
      document.getElementById('modal-header').textContent = modalData[id].title;
      document.getElementById('modal-description').textContent = modalData[id].description;
    };
  }

  // When the user clicks on <span> (x), close the modal
  modalClose.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
};

window.addEventListener('load', function init() {
  showMenu('nav-toggle', 'nav-menu');

  const navLink = document.querySelectorAll('.nav__link');
  navLink.forEach(n => n.addEventListener('click', linkAction));
  navIndicatorOnScroll();

  const themeSwitcher = document.getElementById('theme-switcher');
  themeSwitcher.addEventListener('click', switchThemes);
  scrollTop();

  modal();
});
