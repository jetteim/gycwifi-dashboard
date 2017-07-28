import template from './router-form.jade'

class Controller {

  /* @ngInject */
  constructor($state, $api, $message, $scope, validationService) {
    this.$state = $state;
    this.$api = $api;
    this.$message = $message;
    this.$scope = $scope;
    this.validationService = validationService;

    this.init();
  }

  init() {
    this.locations = [];
    this.location = {};
    this.router = {};
    this.canCreate = false;
    this.validator = this.validationService.init();
    this.getLocations();
  }

  getLocations() {
    this.$api.getAll('locations')
      .then((response) => {
        this.locations = response.data.locations;
        // Если нет ни одной локации показываем сообщение и кнопку создать локацию
        if (!this.locations[0]) {
          this.dontCreate = true;
          // Если локации есть показываем форму роутера
        } else {
          this.location = this.findLocationByRouterId(this.locations, this.router.location_id || null) || this.locations[0];
          this.router.location_id = this.location.id;
        }
      })
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
    this.$api.create('routers', this.router)
      .then((response) => {
        this.$state.go('dashboard.routers');
      })
      .catch(function (e) {
        this.$message.error('Error', e.data.error);
      });
  }

  update() {
    this.$api.update('routers', this.router.id, this.router)
      .then((response) => {
        this.router = response.data.router;
        this.$message.success('Success', 'Updated');
      })
      .catch((e) => {
        this.$message.error('Error', e.data.error);
      })
  }

  change() {
    this.router.location_id = this.location.id;
  }

  // Вынести в сервис
  findLocationByRouterId(arr, id) {
    let location = null;
    arr.forEach((loc) => {
      if (loc.id == id) {
        return location = loc;
      }
    });
    return location;
  }

}

const component = {
  bindings: {
    router: '=',
    action: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
