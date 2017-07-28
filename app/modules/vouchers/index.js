import vouchersComponent from './vouchers.component'
import voucherComponent from './voucher/voucher.component'
import VoucherService from '../../services/voucher.service'

const vouchers = angular.module('vouchers', []);

vouchers.component('vouchers', vouchersComponent);
vouchers.component('voucher', voucherComponent);
vouchers.service('voucherService', VoucherService);

export default vouchers;
