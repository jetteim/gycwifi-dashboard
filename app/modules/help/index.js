import helpPage from './help-page/help.component'

const help = angular.module('help', []);

help.component('help', helpPage);

/* @ngInject */
help.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.help', {
            url: "help",
            template: "<help></help>"
        })

});

export default help;