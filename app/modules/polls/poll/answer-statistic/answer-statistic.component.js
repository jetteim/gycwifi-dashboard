import template from './answer-statistic.jade'
import './answer-statistic.styl'

class Controller {

  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;
    this.init();
  }

  init() {
    this.$scope.$on('answer_statistic_selected', this.getClients.bind(this));
  }

  getClients(e, answerTitle) {
    const answer = this._getSelectedAnswer(this.question, answerTitle);
    const clients = answer.attempts.map((item, index, arr) => {
      if (item.client) {
        return {
          phone_number: item.client.phone_number,
          attempt_date: arr[index].created_at,
          custom_answer: item.custom_answer
        };
      }
    });
    this._clientsRender(clients);
  }

  _getSelectedAnswer(question, title) {
    return question.answers.filter(item => item.title === title)[0];
  }

  _clientsRender(clients) {
    this.clients = clients;
    this.$scope.$apply();
  }

}

const component = {
  bindings: {
    question: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
