import loginMenuComponent from './login-menu.component'
import menuItemComponent from './menu-item/menu-item.component'
import LoginMenuService from '../../services/login-menu.service'

const loginmenu = angular.module('loginmenu', []);

loginmenu.component('loginMenu', loginMenuComponent);
loginmenu.component('menuItem', menuItemComponent);
loginmenu.service('loginMenuService', LoginMenuService);

export default loginmenu;
