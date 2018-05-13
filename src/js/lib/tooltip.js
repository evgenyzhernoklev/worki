class Tooltips {
  constructor() {
    this.tooltipContents = document.body.querySelectorAll('.js-tooltip-content');
    this.tooltipLinks = document.body.querySelectorAll('.js-tooltip-link');
    this.init();
  }

  init() {
    document.body.addEventListener('click', this.toggleTooltip.bind(this));
  }

  toggleTooltip(e) {
    let target = e.target;

    if (target.classList.contains('js-tooltip-link')) {
      e.preventDefault();
      let parent = target.closest('.js-tooltip-container');
      let content = parent.querySelector('.js-tooltip-content');

      if (target.classList.contains('is-active')) {
        this.clearTooltips();
      } else {
        this.clearTooltips();
        target.classList.add('is-active');
        content.classList.add('is-active');
      }
    } else {
      this.clearTooltips();
    }
  }

  clearTooltips() {
    for (var element of this.tooltipContents) {
      element.classList.remove('is-active');
    }
    for (var element of this.tooltipLinks) {
      element.classList.remove('is-active');
    }
  }
}
