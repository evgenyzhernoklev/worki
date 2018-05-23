class Toggle {
  constructor() {
    this.init();
  }

  init() {
    document.body.addEventListener('click', this.toggleSwitch.bind(this));
  }

  toggleSwitch(e) {
    let target = e.target,
        targetClassList = target.classList;

    if (targetClassList.contains('js-toggle-link')) {
      e.preventDefault();
      let parent = target.closest('.js-toggle-container'),
          content = parent.querySelector('.js-toggle-content'),
          contentClassList = content.classList;

      if (targetClassList.contains('is-active')) {
        targetClassList.remove('is-active');
        contentClassList.remove('is-active');
        content.style.maxHeight = '0';
      } else {
        targetClassList.add('is-active');
        contentClassList.add('is-active');
        content.style.maxHeight = 'none';
      }
    }
  }
}
