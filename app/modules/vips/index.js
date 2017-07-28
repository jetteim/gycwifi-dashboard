import vipsPage from './vips-page/vips.component'

const vips = angular.module('vips', []);

vips.component('vips', vipsPage);

/* @ngInject */
vips.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.vips', {
            url: "vips",
            template: "<vips></vips>"
        })

});

export default vips;