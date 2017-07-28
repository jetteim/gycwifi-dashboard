import template from './location-form.jade'

class Controller {

  /* @ngInject */
  constructor($scope, $state, locationService, brandService, pollService, $env, $message, validationService, $translate) {
    this.$scope = $scope;
    this.$state = $state;
    this.locationService = locationService;
    this.brandService = brandService;
    this.pollService = pollService;
    this.$env = $env;
    this.$message = $message;
    this.validationService = validationService;
    this.$translate = $translate;
  }

  $onInit() {
    let self = this;
    this.brand = {};
    this.location = {};
    this.polls = [];
    this.defaultValues = {
      wlan: '1M',
      wan: '5M',
      auth_expiration_time: '3600',
      redirect_url: 'https://gycwifi.com',
      brand_id: '1',
      category_id: '1',
      last_page_content: 'text'
    };

    this.loading = false;
    this.validator = this.validationService.init();
    this.apiUrl = this.$env.getApiUrl();
    this.getBrands();

    this.getPolls()
      .then((polls) => {
        this.setPolls(polls);
        this.selectPoll(this.location.poll_id);
      });

    // Load images events
    this.$scope.$on('image_load_start', (e, data) => {
      this.loading = true;
    });
    this.$scope.$on('image_loaded', (e, data) => {
      var key = data.entity.split('_')[1];
      this.location[key] = this.apiUrl + data.url;
      this.loading = false;
    });
    this.$scope.$on('image_load_error', (e, data) => {
      this.loading = false;
    });
    this.$scope.$on('colorpicker-closed', (e, obj) => {
      this.location.bg_color = obj.value;
    });
  }

  change() {
    console.log(this);
  }

  getBrands() {
    this.brandService.get().then((data) => {
      this.brands = data.brands;

      this.brands.forEach((brand) => {
        delete brand.slug;
        delete brand.user_id;
        delete brand.created_at;
        delete brand.updated_at;
      });

      if (this.action === 'create') {
        this.brand = this.brands[0];
        this.location.brand_id = this.brand.id;
      }
    })
  }

  getPolls() {
    return this.pollService.get({
        location_id: this.location.id
      })
      .then((response) => {
        return response.data.polls;
      });
  }

  setPolls(polls) {
    this.polls = polls;
  }

  selectPoll(id) {
    if (!id) {
      this.poll = this.polls[0];
      this.location.poll_id = this.poll ? this.poll.id : null;
    } else {
      this.poll = this.getCurrentPoll(id);
      this.location.poll_id = id;
    }
  }

  getCurrentPoll(id) {
    let currentPoll = {};
    this.polls.forEach((poll) => {
      if (poll.id === id) {
        return currentPoll = poll;
      }
    });
    return currentPoll;
  }

  onChange() {
    this.brand = this.getCurrentBrand(this.location.brand_id) || this.brands[0];
    this.location = Object.assign({}, this.brand, this.location);
    this.location = this.locationService.mergeObjects(this.location, this.defaultValues);
  }

  getCurrentBrand(id) {
    let currentBrand = {};
    this.brands.forEach((brand) => {
      if (brand.id === id) {
        return currentBrand = brand;
      }
    });
    return currentBrand;
  }

  sendForm() {
    if (!this.validator.valid()) return; // Check inputs

    if (this.action === 'create') {
      this.create();
    } else if (this.action === 'update') {
      this.update();
    } else {
      this.$message.error('Oops...', 'Unknown method');
    }

  }

  create() {
    delete this.location.slug;
    this.locationService.create(this.location)
      .then((response) => {
        this.$state.go('dashboard.locations');
      })
      .catch((e) => {
        this.$message.error('Error', e.data.error);
      })
  }

  update() {
    this.locationService.update(this.location.id, this.location)
      .then((response) => {
        this.$message.success('ok', this.$translate.instant('general.updated'));
      })
      .catch(function(e) {
        this.$message.error('Error', "Brand can't be blank");
      })
  }

}


const component = {
  bindings: {
    location: '=',
    action: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
