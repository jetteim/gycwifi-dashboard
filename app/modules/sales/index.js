import salesPage from './sales-page/sales.component'

const sales = angular.module('sales', []);

sales.component('sales', salesPage);

/* @ngInject */
sales.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.sales', {
      url: "sales",
      template: "<sales></sales>"
    })

});

export default sales;
