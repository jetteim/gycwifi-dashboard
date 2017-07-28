import BaseService from './base.service.js';

class VoucherService extends BaseService {

  /* @ngInject */
  constructor($api, $message, $rootScope) {
    super($api, $message, 'vouchers');
    this.$rootScope = $rootScope;
  }

  getAll(params) {
    this.$rootScope.$broadcast('spinner', {entity: 'vouchers', action: 'show'});
    return super.get(params).then(response => {
      let vouchers = [];
      if (response.status !== 404) {
        vouchers = this.formatVouchersTime(response.data.vouchers);
      }
      this.$rootScope.$broadcast('spinner', {entity: 'vouchers', action: 'hide'});
      return vouchers;
    })
  }

  timeStrToHoursNum(str) {
    const time = new Date(new Date(str).getTime() - new Date().getTime()).getHours();
    return time >= 0 ? time : 0;
  }

  formatTime(str) {
    const hours = this.timeStrToHoursNum(str);
    return {
      days: Math.floor(hours / 24),
      hours: hours % 24
    }
  }

  formatVoucherTime(voucher) {
    return Object.assign({}, voucher, { expiration: this.formatTime(voucher.expiration) })
  }

  formatVouchersTime(vouchers) {
    const result = [];
    vouchers.map(voucher => {
      result.push(this.formatVoucherTime(voucher))
    });
    return result;
  }

}

export default VoucherService;
