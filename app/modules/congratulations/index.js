import congratulationsPage from './congratulations-page/congratulations.component'
import congratulationsPromo from './congratulations-promo/congratulations-promo.component'
import congratulationsFormEmail from './congratulations-form-email/congratulations-form-email.component'
import congratulationsFormSms from './congratulations-form-sms/congratulations-form-sms.component'

const congratulations = angular.module('congratulations', []);

congratulations.component('congratulations', congratulationsPage);
congratulations.component('congratulationsPromo', congratulationsPromo);
congratulations.component('congratulationsFormEmail', congratulationsFormEmail);
congratulations.component('congratulationsFormSms', congratulationsFormSms);

/* @ngInject */
congratulations.config(($stateProvider) => {

    $stateProvider
        .state('dashboard.congratulations', {
            url: "congratulations",
            template: "<congratulations></congratulations>"
        })

});

export default congratulations;