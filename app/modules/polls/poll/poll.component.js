import template from './poll.jade'
import './poll.styl'

class Controller {

  /* @ngInject */
  constructor($state, $message, pollService, pluginsService, $scope, $exportService) {
    this.$state = $state;
    this.$message = $message;
    this.pollService = pollService;
    this.pluginsService = pluginsService;
    this.$scope = $scope;
    this.$exportService = $exportService;
  }

  $onInit() {
    this.questions = [];
    this.pollId = Number(this.$state.params.pollId);
    this.getPoll(this.pollId);
  }

  create() {
    this.pollService.create({ title: this.title, questions: this.questions })
      .then((response) => {
        if (!response.data) return;
        this.$state.go('dashboard.polls');
      })
  }

  update() {
    this.pollService.update(this.pollId, { title: this.title, questions: this.questions })
      .then(() => {
        this.$state.go('dashboard.polls');
      })
  }

  remove() {
    this.pollService.remove(this.pollId)
      .then(() => {
        this.$state.go('dashboard.polls');
      })
  }

  add() {
    this.questions.push({
      title: '',
      question_type: 'radio',
      answers: []
    })
  }

  getPoll(id) {
    if (!id) return;
    this.pollService.getPoll(id)
      .then((poll) => {
        this._pollTitleRender(poll.title);
        this._questionsRender(poll.questions); //.getQuestions(poll));
        this._initCharts(poll);
      })
  }

  _initCharts(poll) {
    this.charts = this.pollService.makeCharts(poll);
  }

  _questionsRender(questions) {
    this.questions = questions;
  }

  _pollTitleRender(title) {
    this.title = title;
  }

  downloadExcel() {
    this.$exportService.poll(this.pollId);
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
