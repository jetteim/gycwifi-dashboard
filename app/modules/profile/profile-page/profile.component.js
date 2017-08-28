import template from './profile.jade';

class Controller {

  /* @ngInject */
  constructor($element, $scope, $api, profileService, $interval) {
    this.$element = $element;
    this.$scope = $scope;
    this.$api = $api;
    this.profileService = profileService;
    this.$interval = $interval;
    this.init();
  }

  init() {
    this.upload_success = false;
    this.profile_saved = false;
    this.profile = this.profileService.getProfile();
    this.tab = 'profile-avatar';
    this.$scope.$on('image_loaded', (e, data) => {
      this.profile.avatar = `${this.$api.getUrl()}${data.url}`;
      this.upload_success = true;
    });
    this.user = this.profileService.userInfo();
    this.promoCodes = this.getPromoCodes();
    this.copyToolTip = 'profile-page.copy-link';
  }

  saveProfile() {
    this.profile_saved = false;
    this.$api.update('users', this.user.id, {
        'profile': this.profile
      })
      .then((profile) => {
        this.profile = profile;
        this.profileService.setProfile(profile);
        this.upload_success = false;
        this.profile_saved = true;
      })
      .catch();
  }

  clearAvatar() {
    this.profile.avatar = null;
    this.upload_success = false;
  }

  generatePromoCode() {
    this.$api.create('promo_codes')
      .then((response) => {
        console.log(response.data);
        this.promoCodes.push(this.promoCodeHash(response.data.promo_code));
      })
      .catch();
  }

  setTab(tab) {
    this.tab = tab;
  }

  getPromoCodes() {
    this.$api.get('promo_codes')
      .then((response) => {
        this.promoCodes = response.data.promo_codes.map(code => this.promoCodeHash(code));
      })
      .catch();
  }
  promoCodeHash(promocode) {
    return {
      code: promocode,
      link: `${window.location.origin}/#/signup?code=${promocode}`
    };
  }

  changeCopyToolTip() {
    this.copyToolTip = 'profile-page.copied-link';
    this.$interval(() => {
      this.copyToolTip = 'profile-page.copy-link';
    }, 2000);
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
