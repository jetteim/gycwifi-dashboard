import template from './poll-activity.jade'
import './poll-activity.styl'

class Controller {

  /* @ngInject */
  constructor($scope, pollActivityService) {
    this.$scope = $scope;
    this.pollActivityService = pollActivityService;
    this.chart = {};
  }

  $onInit() {
    this.chart.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
    this.chart.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    this.getChartData();
  }

  getChartData() {
    this.pollActivityService.get({ id: this.pollId })
      .then(charts => {
        // todo вынести перебор в шаблон
        this.chart = charts[0].filter(chart => chart.name === 'question_activity_line')[0];
      });
  }

  refresh() {
    this.getChartData()
  }

}

const component = {
  bindings: {
    pollId: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
