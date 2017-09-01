import template from './profile.jade';

class Controller {

  /* @ngInject */
  constructor($element, $scope, $interval, $translate, $uibModal, $api, profileService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$api = $api;
    this.profileService = profileService;
    this.$interval = $interval;
    this.$uibModal = $uibModal;
    this.$translate = $translate;
    this.init();
  }

  init() {
    this.profile = this.profileService.getProfile();
    this.tab = 'profile-avatar';
    this.$scope.$on('image_loaded', (e, data) => {
      this.profile.avatar = `${this.$api.getUrl()}${data.url}`;
      this.upload_success = true;
    });
    this.user = this.profileService.currentUser();
    this.getPromoCodes();
    this.copyToolTip = 'profile-page.copy-link';
    this.agreementExcepted = false;
  }

  saveProfile() {
    this.successfulUpdate = false;
    this.$api.update('users', this.user.id, {
        'profile': this.profile
      })
      .then((profile) => {
        this.profile = profile;
        this.profileService.setProfile(profile);
        this.successfulUpdate = true;
        this.$interval(() => {
          this.successfulUpdate = false;
        }, 2000);
      })
      .catch();
  }

  clearAvatar() {
    this.profile.avatar = null;
  }

  generatePromoCode() {
    if(!this.agreementExcepted) return this.showAgentAgreement();
    this.$api.create('promo_codes')
      .then(response => this.promoCodes.push(this.promoCodeHash(response.data.promo_code)))
      .catch();
  }

  setTab(tab) {
    this.tab = tab;
  }

  getPromoCodes() {
    this.$api.get('promo_codes')
      .then((response) => {
        this.promoCodes = response.data.promo_codes.map(code => this.promoCodeHash(code));
        this.agreementExcepted = this.promoCodes.length !== 0;
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

  showAgentAgreement(){
   this.$uibModal.open({
      templateUrl: `modals/agent-agreement-${this.$translate.use()}.html`,
      backdrop: true,
      windowClass: 'modal',
      size: 'lg',
      controller: ($scope, $uibModalInstance) => {
        $scope.cancel = ($event) =>  {
          $event.preventDefault();
          $uibModalInstance.dismiss('cancel');
        };
        $scope.submitAgreement = () => {
          this.agreementExcepted = true;
          this.generatePromoCode();
          $uibModalInstance.dismiss('cancel');
        };
      }
    });

  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
