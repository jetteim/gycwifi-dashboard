import template from './referrals-control.jade'

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
    this.changePageHandler = this.getReferrals.bind(this);
    this.getReferrals(1);
  }

  getReferrals(pageNum) {
    this.$api.getByPageNum('referrals', pageNum )
      .then((response) => {
        this.referrals = response.referrals;
        this.itemsOnPage = response.itemsOnPage || 20;
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
