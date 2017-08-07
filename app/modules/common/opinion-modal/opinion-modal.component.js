import template from './opinion-modal.jade'
import './opinion-modal.styl'

class Controller {

  /*@ngInject*/
  constructor(feedbackService, $window, $scope) {
    this.feedbackService = feedbackService;
    this.$window = $window;
    this.$scope = $scope;
    this.init();
  }

  init() {
    this.$scope.$on('opinion.selected', (e, opinion) => {
      this.opinion = opinion;
    })
  }

  send() {
    this.feedbackService.update(this.opinion.id, this.opinion);
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;