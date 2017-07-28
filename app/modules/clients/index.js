import clientsPage from './clients-page/clients.component'
import ClientService from '../../services/clients/client.service'

const clients = angular.module('clients', []);

clients.component('clients', clientsPage);

clients.service('clientService', ClientService);

/* @ngInject */
clients.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.clients', {
            url: "clients",
            template: "<clients></clients>"
        })

});

export default clients;