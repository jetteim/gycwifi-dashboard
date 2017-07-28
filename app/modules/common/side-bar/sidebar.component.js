import template from './sidebar.jade'

class Controller {

    /*@ngInject*/
    constructor(pluginsService, $timeout, $scope, $exportService, profileService) {
      this.pluginsService = pluginsService;
      this.$timeout = $timeout;
      this.$scope = $scope;
      this.$exportService = $exportService;
      this.profileService = profileService;
    }

    $onInit() {
      this.$timeout(this.pluginsService.initUi, 0);
      this.role = this.profileService.getProfile().role;
    }

    amoCRM() {
      this.$exportService.amoCRM();
    }

    MailChimp() {
      this.$exportService.MailChimp();
    }

    closeSideBar() {
        this.pluginsService.uiAction('sidebar_close')
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
