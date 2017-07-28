import BaseService from '../base.service.js';

class PollService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'polls');
  }

  // ajax methods
  getPoll(id) {
    return super.getById(id)
      .then((response) => {
        if (!response.data) return;
        return response.data.poll;
      });
  }

  getPolls() {
    return super.get()
      .then((response) => {
        if (!response.data) return;
        return response.data;
      });
  }

  makeCharts(poll) {
    let results = [];
    poll.questions.forEach((question) => {
      var chart = {
        title: question.title,
        labels: [],
        data: []
      };
      question.answers.forEach((answer) => {
        chart.labels.push(answer.title);
        chart.data.push(answer.attempts_count)
      });
      results.push(chart);
    });
    return results;
  }

}

export default PollService;
