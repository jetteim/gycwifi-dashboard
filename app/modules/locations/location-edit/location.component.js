import template from './location-edit.jade'

class Controller {

  /* @ngInject */
  constructor($stateParams, locationService, $message, $state, $scope) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.locationService = locationService;
    this.$message = $message;
    this.$scope = $scope;
    this.init();
  }

  init() {
    this.location = {};
    this.getLocation();
  }

  getLocation() {
    this.locationService.getById(this.slug)
      .then((response) => {
        this.location = response.data.location;
        this.location.auth_expiration_time += '';
        this.location.category_id += '';
        this.slug = response.data.location.slug;
        this.$scope.$broadcast('location.loaded', this.location)
      })
      .catch()
  }

  viewLocations() {
    this.$params.set('locations', this.brand.id);
    this.$state.go('dashboard.locations');
  };

  deleteLocation() {
    this.locationService.remove(this.location.id)
      .then(res => {
        this.$state.go('dashboard.locations');
      })
  }

}

const component = {
  bindings: {
    slug: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
