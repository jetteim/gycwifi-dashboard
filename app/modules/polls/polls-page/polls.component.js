import template from './polls.jade'

class Controller {

  /* @ngInject */
  constructor(pollService, $handler) {
    this.pollService = pollService;
    this.$handler = $handler;
    this.init();
  }

  init() {
    this.getPolls();
  }

  getPolls() {
    this.pollService.getPolls()
      .then(this._pollsRender.bind(this))
  }

  _pollsRender(data) {
    this.polls = data.polls;
    this.can_create = data.can_create;
  }

  makeNew() {
    this.$handler.createNew('poll', 'dashboard.poll', this.can_create)
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
