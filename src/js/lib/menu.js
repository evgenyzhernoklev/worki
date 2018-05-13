class Menu {
  constructor(container) {
    this.container = container;
    this.menuScroll = this.container.querySelector('.js-menu-scroll');
    this.menuScrollTarget = document.querySelector('.js-menu-show');
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.checkMenuPosition.bind(this));
    window.addEventListener('resize', this.checkMenuPosition.bind(this));
    document.body.addEventListener('click', this.scrollToElement.bind(this));
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
      const MENU_HEIGHT = 65;
      let element = document.querySelector(target.getAttribute('href')),
          targetPosition = element.getBoundingClientRect(),
          targetPositionTop = targetPosition.top + window.pageYOffset - MENU_HEIGHT;

      scrollTo(targetPositionTop, 1000);
    }
  }
}
