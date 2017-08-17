import template from './login-menu.jade'
import './login-menu.styl'

class Controller {

  /* @ngInject */
  constructor(loginMenuService, $scope, pluginsService) {
    this.loginMenuService = loginMenuService;
    this.$scope = $scope;
    this.pluginsService = pluginsService;
    this.init()
  }

  init() {
    this.vouchers = [];
    this.duration = '60'; // default value
    this.$scope.$on('location.loaded', this.locationLoadedHandler.bind(this))
  }

  locationLoadedHandler(event, location) {
    this.location = location;
    this.getVouchers();
  }

  getVouchers() {
    this.voucherService.getAll({
      location_id: this.location.id
    }).then(vouchers => {
      this.render(vouchers)
    });
  }

  add() {
    this.voucherService.create({
      location_id: this.location.id,
      duration: Number(this.duration)
    }).then(response => {
      const voucher = this.voucherService.formatVoucherTime(response.data.voucher);
      this.vouchers.push(voucher)
    })
  }

  render(voucher) {
    this.vouchers = voucher;
  }

  remove(voucher) {
    this.voucherService.remove(voucher.id).then(response => {
      this.vouchers.splice(Array.prototype.indexOf(voucher), 1);
      this.$scope.$digest();
    })
  }

  update(voucher) {
    this.voucherService.update(voucher.id, voucher)
  }

  refresh() {
    this.getVouchers()
  }

  slide() {
    this.pluginsService.uiSlideContent('#block-vouchers')
  }

  isVouchers() {
    return this.vouchers.length > 0;
  }

}

const component = {
  bindings: {
    location: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
