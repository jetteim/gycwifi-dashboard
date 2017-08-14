import officePage from './office-page/office.component';
import rewardService from '../../services/offices/reward.service.js'

const office = angular.module('office', []);

office.component('office', officePage);
office.service('rewardService', rewardService);

/* @ngInject */
office.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.office', {
      url: "office",
      template: "<office></office>"
    });

});

export default office;
