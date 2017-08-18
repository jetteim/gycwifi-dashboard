import template from './rewards-control.jade';
import './rewards-control.styl';

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
    this.changePageHandler = this.getRewards.bind(this);
    this.getRewards(1);
  }

  getRewards(pageNum) {
    this.$api.getByPageNum('rewards', pageNum )
      .then((response) => {
        this.rewards = response.rewards;
        this.rewardsTotal = response.rewards_total;
        this.rewardsPayed = response.rewards_payed;
        this.itemsOnPage = response.items_on_page || 20;
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
