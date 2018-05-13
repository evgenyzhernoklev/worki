class Toggle {
  constructor() {
    this.init();
  }

  init() {
    document.body.addEventListener('click', this.toggleSwitch.bind(this));
  }

  toggleSwitch(e) {
    let target = e.target;

    if (target.classList.contains('js-toggle-link')) {
      e.preventDefault();
      let parent = target.closest('.js-toggle-container'),
          content = parent.querySelector('.js-toggle-content');

      if (target.classList.contains('is-active')) {
        target.classList.remove('is-active');
        content.style.display = 'none';
      } else {
        target.classList.add('is-active');
        content.style.display = 'block';
      }
    }
  }
}
