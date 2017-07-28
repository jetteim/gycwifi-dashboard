import template from './opinions.jade'

class Controller {

  /* @ngInject */
  constructor(opinionsService) {
    this.opinionsService = opinionsService;
    this.opinions = [];
    this.init();
  }

  init() {
    this.opinionsService.get().then((response) => {
      this.render(response.data);
    })
  }

  render(opinions) {
    this.opinions = opinions;
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
