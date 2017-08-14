import template from './office.jade';
import './office.styl';

class Controller {

  /* @ngInject */
  constructor($scope, rewardService) {
    this.$scope = $scope;
    this.rewardService = rewardService;
    this.init();
  }

  init() {
    this.rewards = [];
    this.form = {};
    this.getNotifications();
  }
  getRewards(){
    // this.rewardService.getRewards().;
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
