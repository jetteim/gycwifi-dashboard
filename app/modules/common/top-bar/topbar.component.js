import template from './topbar.jade'

class Controller {

  /*@ngInject*/
  constructor($auth, $state, profileService, $api, $handler) {
    this.$auth = $auth;
    this.$state = $state;
    this.profileService = profileService;
    this.$handler = $handler;
    this.$api = $api;
  }

  $onInit() {
    this.profile = this.profileService.getProfile();
    this.unread_count = 0;
    this.unreadCount();
  }

  unreadCount() {
    this.$api.get('unread_count')
      .then(function(response) {
        this.unread_count = response.data.unread_count;
      }.bind(this))
  }

  logout() {
    this.$auth.logout();
    this.profileService.clearProfile();
    this.$state.go('login');
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
