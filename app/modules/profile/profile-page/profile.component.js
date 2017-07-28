import template from './profile.jade'

class Controller {

  /* @ngInject */
  constructor($element, $scope, $api, profileService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$api = $api;
    this.profileService = profileService;

    this.init();
  }

  init() {
    this.profile = this.profileService.getProfile();
    this.form = {};

    this.$scope.$on('image_loaded', (e, data) => {
      this.form.avatar = this.apiUrl + data.url;
    })
  }

  saveProfile() {

    this.$api.update('users', this.profile.id, this.form)
      .then((user) => {
        this.profile.avatar = user.avatar;
        this.profileService.setProfile(user);
      })
      .catch()
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
