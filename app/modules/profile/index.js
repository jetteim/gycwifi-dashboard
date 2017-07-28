import profilePage from './profile-page/profile.component'
import inboxPage from './inbox-page/inbox.component'

import NotificationService from '../../services/inbox/notification.service.js'

const profile = angular.module('profile', []);

profile.component('profile', profilePage);
profile.component('inbox', inboxPage);

profile.service('notificationService', NotificationService);

/* @ngInject */
profile.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.profile', {
      url: "profile",
      template: "<profile></profile>"
    })
    .state('dashboard.inbox', {
      url: "inbox",
      template: "<inbox></inbox>"
    })

});

export default profile;
