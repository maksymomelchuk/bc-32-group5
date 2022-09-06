(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn1: document.querySelector('[data-menu-close1]'),
    closeMenuBtn2: document.querySelector('[data-menu-close2]'),
    closeMenuBtn3: document.querySelector('[data-menu-close3]'),
    closeMenuBtn4: document.querySelector('[data-menu-close4]'),
    closeMenuBtn5: document.querySelector('[data-menu-close5]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('.mobile-menu'),

    // menuList: document.querySelector('.mobile-menu-nav__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn1.addEventListener('click', toggleMenu);
  refs.closeMenuBtn2.addEventListener('click', toggleMenu);
  refs.closeMenuBtn3.addEventListener('click', toggleMenu);
  refs.closeMenuBtn4.addEventListener('click', toggleMenu);
  refs.closeMenuBtn5.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
