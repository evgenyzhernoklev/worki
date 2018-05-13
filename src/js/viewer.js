class Viewer {
  constructor() {
    this.init();
  }

  init() {
    this.initClasses();
  }

  initClasses() {
    let dropdowns = document.querySelectorAll('.js-dropdown-container');
    for (var element of dropdowns) {
      new Dropdown(element);
    }

    let menu = document.querySelectorAll('.js-menu-container');
    for (var element of menu) {
      new Menu(element);
    }

    if (document.querySelectorAll('.js-tooltip-link').length) {
      new Tooltips();
    }
  }
}
