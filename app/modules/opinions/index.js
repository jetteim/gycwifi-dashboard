import opinionsPage from './opinions-page/opinions.component'

const opinions = angular.module('opinions', []);

opinions.component('opinions', opinionsPage);

/* @ngInject */
opinions.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.opinions', {
      url: "opinions",
      template: "<opinions></opinions>"
    })

});

export default opinions;
