class Menu {
  constructor(container) {
    this.container = container;
    this.menuScroll = this.container.querySelector('.js-menu-scroll');
    this.menuScrollTarget = document.querySelector('.js-menu-show');
    this.menuMobile = this.container.querySelector('.js-menu-mobile');
    this.menuMobileToggle = this.container.querySelector('.js-menu-mobile-toggle');
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.checkMenuPosition.bind(this));
    window.addEventListener('resize', this.checkMenuPosition.bind(this));
    document.body.addEventListener('click', this.scrollToElement.bind(this));
    this.menuMobileToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
  }

  checkMenuPosition() {
    let targetPosition = this.menuScrollTarget.getBoundingClientRect(),
        targetPositionTop = targetPosition.top;

    if (targetPositionTop < 0) {
      this.menuScroll.classList.add('is-active');
    } else {
      this.menuScroll.classList.remove('is-active');
    }
  }

  scrollToElement(e) {
    let target = e.target;

    if (target.classList.contains('js-menu-link-scroll')) {
      e.preventDefault();
      let menu_height = 65;
      if (target.classList.contains('js-menu-link-scroll-no-menu')) {
        menu_height = 0;
      }
      let element = document.querySelector(target.getAttribute('href')),
          targetPosition = element.getBoundingClientRect(),
          targetPositionTop = targetPosition.top + window.pageYOffset - menu_height;

      scrollTo(targetPositionTop, 1000);

      this.menuMobileToggle.classList.remove('is-active');
      this.menuMobile.classList.remove('is-active');
      document.body.classList.remove('menu-opened');
    }
  }

  toggleMobileMenu(e) {
    e.preventDefault();
    let targetClassList = this.menuMobileToggle.classList,
        menuClassList = this.menuMobile.classList,
        bodyClassList = document.body.classList;

    if (targetClassList.contains('is-active')) {
      targetClassList.remove('is-active');
      menuClassList.remove('is-active');
      bodyClassList.remove('menu-opened');
    } else {
      targetClassList.add('is-active');
      menuClassList.add('is-active');
      bodyClassList.add('menu-opened');
    }
  }
}
