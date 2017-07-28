import template from './spinner.jade'
import './spinner.styl'

class Controller {

  /*@ngInject*/
  constructor($scope, $element) {
    this.$scope = $scope;
    this.$element = $element;
    this.init();
  }

  init() {
    this.display === 'block' ? this.$element.addClass('spinner_block') : null;
    this.$scope.$on('spinner', this.eventHandler.bind(this));
    this.open();
  }

  eventHandler(e, { entity, action }) {
    if (entity !== this.entity) return;
    if (action === 'hide') {
      this.close()
    }
    if (action === 'show') {
      this.open()
    }
  }

  open() {
    this.$element.addClass('spinner_show')
  }

  close() {
    this.$element.removeClass('spinner_show')
  }

}

const component = {
  bindings: {
    entity: '<',
    display: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
