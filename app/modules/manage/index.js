import managePage from './manage-page/manage.component'
import accountControl from './manage-page/account-stats/account-stats.component'
import usersControl from './manage-page/users-control/users-control.component'
import brandsControl from './manage-page/brands-control/brands-control.component'
import routersControl from './manage-page/routers-control/routers-control.component'
import locationsControl from './manage-page/locations-control/locations-control.component'

const manage = angular.module('manage', []);

manage.component('manage', managePage);
manage.component('accountstats', accountControl);
manage.component('userscontrol', usersControl);
manage.component('brandscontrol', brandsControl);
manage.component('routerscontrol', routersControl);
manage.component('locationscontrol', locationsControl);

/* @ngInject */
manage.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.manage', {
      url: "manage",
      template: "<manage></manage>"
    })

});

export default manage;
