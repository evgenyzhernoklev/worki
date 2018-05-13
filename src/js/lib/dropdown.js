class Dropdown {
  constructor(container) {
    this.container = container;
    this.contents = this.container.querySelectorAll('.js-dropdown-item-content');
    this.links = this.container.querySelectorAll('.js-dropdown-item-link');
    this.init();
  }

  init() {
    this.container.addEventListener('click', this.updateDropdown.bind(this));
  }

  updateDropdown(e) {
    let target = e.target;

    if (target.classList.contains('js-dropdown-item-link')) {
      let parent = target.closest('.js-dropdown-item');
      let content = parent.querySelector('.js-dropdown-item-content');

      if (target.classList.contains('is-active')) {
        this.clearDropdown();
      } else {
        this.clearDropdown();
        target.classList.add('is-active');
        slideDown(content);
      }
    }
  }

  clearDropdown() {
    for (var element of this.links) {
      element.classList.remove('is-active');
    }
    for (var element of this.contents) {
      slideUp(element);
    }
  }
}
