import locationsPage from './locations-page/locations.component.js'
import locationCard from './location-card/location-card.component.js'
import locationNew from './location-new/location-new.component.js'
import locationEdit from './location-edit/location.component.js'
import locationForm from './location-form/location-form.component.js'

import LocationService from '../../services/locations/location.service.js'

const locations = angular.module('locations', []);

locations.component('locations', locationsPage);
locations.component('locationCard', locationCard);
locations.component('locationNew', locationNew);
locations.component('location', locationEdit);
locations.component('locationForm', locationForm);

locations.service('locationService', LocationService);

/* @ngInject */
locations.config($stateProvider => {

  $stateProvider
    .state('dashboard.locations', {
      url: "locations",
      template: "<locations></locations>"
    })
    .state('dashboard.location', {
      url: "locations/:slug",
      template: '<location slug="$ctrl.slug"></location>',
      controller: function($stateParams) {
        this.slug = $stateParams.slug;
      },
      controllerAs: '$ctrl'
    })
    .state('locationNew', {
      url: "/location/new",
      template: "<location-new></location-new>"
    })
});

export default locations;
