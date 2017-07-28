import template from './brand-form.jade'

class Controller {

  /* @ngInject */
  constructor($scope, $state, $env, brandService, layoutService, validationService) {
    this.$scope = $scope;
    this.$state = $state;
    this.$env = $env;
    this.brandService = brandService;
    this.layoutService = layoutService;
    this.validationService = validationService;
  }

  $onInit() {
    this.loading = false;
    this.validator = this.validationService.init();
    this.apiUrl = this.$env.getApiUrl();
    this.getLayouts();

    this.$scope.$on('image_load_start', (e, data) => {
      this.loading = true;
    });
    this.$scope.$on('image_loaded', (e, data) => {
      var key = data.entity.split('_')[1];
      this.brand[key] = this.apiUrl + data.url;
      this.loading = false;
    });
    this.$scope.$on('image_load_error', (e, data) => {
      this.loading = false;
    });
    this.$scope.$on('colorpicker-closed', (e, obj) => {
      this.brand.bg_color = obj.value;
    });
  }

  sendForm() {
    if (!this.validator.valid()) return; // Check inputs

    if (this.action === 'create') {
      this.create();
    } else if (this.action === 'update') {
      this.update();
    }

  }

  create() {
    this.brandService.create(this.brand)
      .then((response) => {
        if (response.status === 'ok') {
          this.$state.go('dashboard.brands');
        }
      })
  }

  update() {
    this.brandService.update(this.brand.id, this.brand)
  }

  getLayouts() {
    this.layoutService.getLayouts()
      .then(function(layouts) {
        this.layouts = layouts
      }.bind(this));
  }

}


const component = {
  bindings: {
    brand: '=',
    action: '<',
    layouts: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
