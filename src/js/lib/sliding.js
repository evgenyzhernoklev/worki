class SlideToggle {
  constructor(container) {
    this.container = container;
    this.content = this.container.querySelector('.js-slideToggle-content');
    this.button = this.container.querySelector('.js-slideToggle-button');
    this.WIDTH_MOBILE = 767;
    this.init();
  }

  init() {
    this.button.addEventListener('click', this.toggleContent.bind(this));
    window.addEventListener('resize', this.checkTogglePosition.bind(this));
  }

  toggleContent(e) {
    e.preventDefault();
    let buttonClassList = this.button.classList,
        contentClassList = this.content.classList;

    if (buttonClassList.contains('is-active')) {
      contentClassList.remove('is-active');
      buttonClassList.remove('is-active');
      this.button.textContent = 'показать все';
      slideUp(this.content);
    } else {
      contentClassList.add('is-active');
      buttonClassList.add('is-active');
      this.button.textContent = 'скрыть';
      slideDown(this.content);
    }
  }

  checkTogglePosition() {
    // console.log(viewportSize.getWidth());
  }
}
