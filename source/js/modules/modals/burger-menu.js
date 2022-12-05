import {ScrollLock} from '../../utils/scroll-lock';
import {FocusLock} from '../../utils/focus-lock';

function renderBurgerMenu(options) {
  let navContainer = document.querySelector(`.${options.container}`);
  let navToggleButton = document.querySelector(`.${options.button}`);
  let navOverlay = document.querySelector(`.${options.overlay}`);
  let links = [];
  navContainer._scrollLock = new ScrollLock();
  navContainer._focusLock = new FocusLock();
  if (navContainer) {
    links = navContainer.querySelectorAll('a');
  }

  function openMenu() {
    navContainer.classList.remove(`${options.container}--closed`);
    navContainer.classList.add(`${options.container}--opened`);
    navContainer._scrollLock.disableScrolling();
    navContainer._focusLock.lock(`.${options.container}`, navContainer._startFocus);

    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', closeMenu);
      }
    }

    if (navOverlay) {
      navOverlay.addEventListener('click', closeMenu);
    }
  }

  function closeMenu() {
    navContainer.classList.add(`${options.container}--closed`);
    navContainer.classList.remove(`${options.container}--opened`);
    navContainer._scrollLock.enableScrolling();
    navContainer._focusLock.unlock(navContainer._focusBack);

    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        links[i].removeEventListener('click', closeMenu);
      }
    }

    if (navOverlay) {
      navOverlay.removeEventListener('click', closeMenu);
    }
  }

  function toggleMenu() {
    if (navContainer.classList.contains(`${options.container}--closed`)) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  if (navContainer && navToggleButton) {
    navContainer.classList.remove(`${options.container}--no-script`);

    navToggleButton.addEventListener('click', toggleMenu);
  }

}

export default renderBurgerMenu;
