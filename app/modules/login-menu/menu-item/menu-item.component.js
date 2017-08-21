import template from './menu-item.jade'
import './menu-item.styl'

class Controller {

  /* @ngInject */
  constructor() {}

}

const component = {
  bindings: {
    menuItem: '<',
    remove: '&',
    update: '&'
  },
  template: template(),
  controller: Controller
};

export default component;
