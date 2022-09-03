// Custom scripts
// Get the container element
var linkContainer = document.getElementById('header-nav');

// Get all buttons with class="btn" inside the container
var links = linkContainer.getElementsByClassName('header-nav__link');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    // Add the active class to the current/clicked button
    this.className += ' active';
  });
}

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('.mobile-menu'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mobile-menu-nav__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
