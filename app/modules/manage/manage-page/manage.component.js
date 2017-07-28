import template from './manage.jade'

class Controller {

  /* @ngInject */
  constructor($element, $scope, $api, pluginsService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$api = $api;
    this.pluginsService = pluginsService;
    this.init();
  }
  init() {
    this.pluginsService.initBlocksAPI();
    this.tabName = 'users'
  }
  tab(tabName) {
    this.tabName = tabName
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
