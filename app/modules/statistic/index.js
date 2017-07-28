import statisticPage from './statistic-page/statistic.component'

const statistic = angular.module('statistic', ['chart.js']);

statistic.component('statistic', statisticPage);

/* @ngInject */
statistic.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.statistic', {
      url: "statistic",
      template: "<statistic></statistic>"
    })

});

export default statistic;
