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
  }

  checkMenuPosition() {
    let targetPosition = this.menuScrollTarget.getBoundingClientRect();
    let targetPositionTop = targetPosition.top;

    if (targetPositionTop < 0) {
      this.menuScroll.classList.add('is-active');
    } else {
      this.menuScroll.classList.remove('is-active');
    }
  }
}
