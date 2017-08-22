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
    this.profile = this.profileService.getProfile();
    this.form = {};
    this.tab = 'profile-avatar';
    this.$scope.$on('image_loaded', (e, data) => {
      this.form.avatar = this.apiUrl + data.url;
    });
    this.user = this.profileService.userInfo();
    this.promoCodes = this.getPromoCodes();
    this.copyToolTip = 'profile-page.copy-link';
  }

  saveProfile() {
    this.$api.update('users', this.user.id, { 'user': this.form })
      .then((user) => {
        this.profile.avatar = user.avatar;
        this.profileService.setProfile(user);
      })
      .catch();
  }

  generatePromoCode(){
    this.$api.create('promo_codes')
      .then((response) => {
        console.log(response.data);
        this.promoCodes.push(this.promoCodeHash(response.data.promo_code));
      })
      .catch();
  }

  setTab(tab){
    this.tab = tab;
  }

  getPromoCodes(){
    this.$api.get('promo_codes')
      .then((response) => {
        this.promoCodes = response.data.promo_codes.map( code => this.promoCodeHash(code) );
      })
      .catch();
  }
  promoCodeHash(promocode){
    return { code: promocode,
             link: `${window.location.origin}/sign_up?code=${promocode}`};
  }

  changeCopyToolTip(){
    this.copyToolTip = 'profile-page.copied-link';
    this.$interval( () => { this.copyToolTip = 'profile-page.copy-link'; }, 2000);
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
