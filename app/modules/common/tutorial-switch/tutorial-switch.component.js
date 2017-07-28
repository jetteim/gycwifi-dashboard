import template from './tutorial-switch.jade'

class Controller {

  /*@ngInject*/
  constructor(tutorialService) {
    this.tutorialService = tutorialService;
  }

  $onInit() {
    this.isActive = this.tutorialService.switchLoad();
  }

  change() {
    this.tutorialService.switchSave(this.isActive);
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component