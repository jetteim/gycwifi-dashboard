import template from './help.jade'

class Controller {

  /* @ngInject */
  constructor(pluginsService, $timeout) {
    this.pluginsService = pluginsService;
    this.$timeout = $timeout;
    this.init();
  }

  init() {
    this.$timeout(this.pluginsService.initUi, 0);
  }
}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
