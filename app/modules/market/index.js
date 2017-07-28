import marketPage from './market-page/market.component'

const market = angular.module('market', []);

market.component('market', marketPage);

/* @ngInject */
market.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.market', {
            url: "market",
            template: "<market></market>"
        })

});

export default market;