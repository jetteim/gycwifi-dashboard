import layoutsPage from './layouts-page/layouts.component'

const layouts = angular.module('layouts', []);

layouts.component('layouts', layoutsPage);

/* @ngInject */
layouts.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.layouts', {
            url: "layouts/:id",
            template: "<layouts brand-id='$ctrl.id'></layouts>",
            controller: function($stateParams) {
                this.id = $stateParams.id;
            },
            controllerAs: '$ctrl'
        })
        .state('dashboard.layout', {
            url: "layout/:brandId/:layoutId",
            template: "<layout-form brand-id='$ctrl.brandId' layout-id='$ctrl.layoutId'></layout-form>",
            controller: function($stateParams) {
                this.brandId = $stateParams.brandId;
                this.layoutId = $stateParams.layoutId;
            },
            controllerAs: '$ctrl'
        })

});

export default layouts;