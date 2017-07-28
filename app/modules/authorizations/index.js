import authorizationsPage from './authorizations-page/authorizations.component'
import SocialLogsService from '../../services/social-logs.service'

const authorizations = angular.module('authorizations', []);

authorizations.component('authorizations', authorizationsPage);
authorizations.service('socialLogsService', SocialLogsService);

/* @ngInject */
authorizations.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.authorizations', {
            url: "authorizations",
            template: "<authorizations></authorizations>"
        })

});

export default authorizations;
