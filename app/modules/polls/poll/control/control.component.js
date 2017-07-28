import template from './control.jade'

class Controller {

  /* @ngInject */
  constructor($element) {
    this.$element = $element;
  }

  slide() {
    this.$element.parent().parent().toggleClass('block-opt-hidden');
  }

}

const component = {
  bindings: {
    refresh: '&'
  },
  template: template(),
  controller: Controller
};

export default component;