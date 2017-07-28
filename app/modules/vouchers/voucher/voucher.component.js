import template from './voucher.jade'
import './voucher.styl'

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