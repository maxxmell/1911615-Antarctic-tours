function renderBurgerMenu(options) {
  let navContainer = document.querySelector(`.${options.container}`);
  let navToggleButton = document.querySelector(`.${options.button}`);
  let links = navContainer.querySelectorAll('a');

  function openMenu() {
    navContainer.classList.remove(`${options.container}--closed`);
    navContainer.classList.add(`${options.container}--opened`);
    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', closeMenu);
      }
    }
  }

  function closeMenu() {
    navContainer.classList.add(`${options.container}--closed`);
    navContainer.classList.remove(`${options.container}--opened`);
    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        links[i].removeEventListener('click', closeMenu);
      }
    }
  }

  function toggleMenu() {
    if (navContainer.classList.contains(`${options.container}--closed`)) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  if (navContainer) {
    navContainer.classList.remove(`${options.container}--no-script`);

    navToggleButton.addEventListener('click', toggleMenu);
  }

}

export default renderBurgerMenu;
