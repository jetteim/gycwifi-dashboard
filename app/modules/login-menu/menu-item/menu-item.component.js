import template from './menu-item.jade'
import './menu-item.styl'

class Controller {

  /* @ngInject */
  constructor() {}

}

const component = {
  bindings: {
    voucher: '<',
    remove: '&',
    update: '&'
  },
  template: template(),
  controller: Controller
};

export default component;
