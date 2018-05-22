class Viewer {
  constructor() {
    this.init();
  }

  init() {
    this.initClasses();
  }

  initClasses() {
    for (var element of document.querySelectorAll('.js-dropdown-container')) {
      new Dropdown(element);
    }

    for (var element of document.querySelectorAll('.js-menu-container')) {
      new Menu(element);
    }

    for (var element of document.querySelectorAll('.js-slideToggle-container')) {
      new SlideToggle(element);
    }

    if (document.querySelectorAll('.js-tooltip-link').length) {
      new Tooltips();
    }

    if (document.querySelectorAll('.js-toggle-link').length) {
      new Toggle();
    }
  }
}
