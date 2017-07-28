import template from './brand-edit.jade'

class Controller {

  /* @ngInject */
  constructor($state, $stateParams, brandService, $params) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.brandService = brandService;
    this.$params = $params;
  }

  $onInit() {
    this.brand = {};
    this.brand.layouts = {};
    this.getBrand();
  }

  getBrand() {
    this.brandService.getBrand(this.id)
      .then((brand) => {
        this.brand = brand;
        this.brand.auth_expiration_time += '';
        this.brand.category_id += '';
      });
  }

  viewLocations() {
    this.$params.set('view_brand', this.brand.id);
    this.$state.go('dashboard.locations');
  };

  deleteBrand() {
    this.brandService.remove(this.id)
      .then(() => {
        this.$state.go('dashboard.brands');
      })
  }

}

const component = {
  bindings: {
    id: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
