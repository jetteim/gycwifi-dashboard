import template from './users-control.jade'

class Controller {

  /* @ngInject */
  constructor($api, pluginsService, $scope, $translate) {
    this.$api = $api;
    this.pluginsService = pluginsService;
    this.$translate = $translate;
    this.$scope = $scope;
    this.init();
  }

  init() {
    this.params = {};
    this.pluginsService.initBlocksAPI();
    this.$scope.$on('ngRepeatFinished', (ngRepeatFinishedEvent) => {
      ngRepeatFinishedEvent.stopPropagation();
      //если это раскомментировать, не работает ng-change
      // this.$scope.$destroy('ngRepeatFinished');
      this.pluginsService.initTableJS();
    });
    this.changePageHandler = this.getUsers.bind(this);
    this.getUsers(1);
  }

  getUsers(pageNum) {
    this.$api.getById('manage', 'users', Object.assign({}, this.params, { page: pageNum }))
      .then((response) => {
        this.users = response.users;
        this.isCreateNew = response.can_create || false;
        this.itemsOnPage = response.itemsOnPage || 10;
        this.pages = response.items_count;
    });
    this.pluginsService.initTableJS();
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
