import BaseService from './base.service.js';

class LoginMenuService extends BaseService {

  /* @ngInject */
  constructor($api, $message, $rootScope) {
    super($api, $message, 'login_menu_items');
    this.$rootScope = $rootScope;
  }

  getAll(params) {
    this.$rootScope.$broadcast('spinner', {
      entity: 'login_menu_items',
      action: 'show'
    });
    return super.get(params).then(response => {
      let login_menu_items = [];
      if (response.status !== 404) {
        login_menu_items = response.data.login_menu_items;
      }
      this.$rootScope.$broadcast('spinner', {
        entity: 'login_menu_items',
        action: 'hide'
      });
      return login_menu_items;
    })
  }

}

export default LoginMenuService;
