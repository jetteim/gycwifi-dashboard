import routersPage from './routers-page/routers.component'
import routerNew from './router-new/router-new.component'
import routerEdit from './router-edit/router.component'
import routerForm from './router-form/router-form.component'

import RouterService from '../../services/routers/router.service'

const routers = angular.module('routers', []);

routers.component('routers', routersPage);
routers.component('routerNew', routerNew);
routers.component('router', routerEdit);
routers.component('routerForm', routerForm);

routers.service('routerService', RouterService);

/* @ngInject */
routers.config(($stateProvider) => {

  $stateProvider
    .state('dashboard.routers', {
      url: "routers",
      template: "<routers></routers>"
    })
    .state('dashboard.router', {
      url: "routers/:id",
      template: '<router id="$ctrl.id"></router>',
      controller: function ($stateParams) {
        this.id = $stateParams.id;
      },
      controllerAs: '$ctrl'
    })
    .state('routerNew', {
      url: "/router/new",
      template: "<router-new></router-new>"
    })

});

export default routers;
