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
    this.loginMenu = [];
    this.url = location.redirect_url; // default value
    this.title_ru = location.title; // default value
    this.title_en = location.title; // default value
    this.$scope.$on('location.loaded', this.locationLoadedHandler.bind(this))
  }

  locationLoadedHandler(event, location) {
    this.location = location;
    this.getLoginMenuItems();
  }

  getLoginMenuItems() {
    this.loginMenuService.getAll({
      location_id: this.location.id
    }).then(loginMenu => {
      this.render(loginMenu)
    });
  }

  add() {
    this.loginMenuService.create({
      location_id: this.location.id,
      url: this.url,
      title_en: this.title_en,
      title_ru: this.title_ru
    }).then(response => {
      this.loginMenu.push(response.data.login_menu_item)
    })
  }

  render(loginMenu) {
    this.loginMenu = loginMenu;
  }

  remove(menuItem) {
    this.loginMenu.remove(login_menu_item.id).then(response => {
      this.loginMenu.splice(Array.prototype.indexOf(menuItem), 1);
      this.$scope.$digest();
    })
  }

  update(menuItem) {
    this.loginMenuService.update(menuItem.id, menuItem)
  }

  refresh() {
    this.getLoginMenuItems()
  }

  slide() {
    this.pluginsService.uiSlideContent('#block-logn-menu')
  }

  isloginMenu() {
    return this.loginMenu.length > 0;
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
