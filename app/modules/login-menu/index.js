import loginMenuComponent from './vouchers.component'
import menuItemComponent from './voucher/voucher.component'
import loginMenuService from '../../services/voucher.service'

const vouchers = angular.module('vouchers', []);

vouchers.component('vouchers', vouchersComponent);
vouchers.component('voucher', voucherComponent);
vouchers.service('voucherService', VoucherService);

export default vouchers;
