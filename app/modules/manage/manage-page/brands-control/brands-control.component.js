import template from './brands-control.jade'

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
    this.changePageHandler = this.getBrands.bind(this);
    this.getBrands(1);
  }

  getBrands(pageNum) {
    this.$api.getById('manage', 'brands', Object.assign({}, this.params, { page: pageNum }))
      .then((response) => {
        this.brands = response.brands;
        this.isCreateNew = response.can_create || false;
        this.itemsOnPage = response.itemsOnPage || 10;
        this.totalItems = response.items_count;
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
