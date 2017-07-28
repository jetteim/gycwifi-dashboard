import template from './poll-pie-chart.jade'
import './poll-pie-chart.styl'

let self;

class Controller {

  /* @ngInject */
  constructor($scope, $rootScope) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.init();
  }

  init() {
    self = this;
    this.chartoptions = this.getOptions();
  }

  getOptions() {
    return {
      cutoutPercentage: 50,
      showAllTooltips: true,
      tooltips: {
        showAllTooltips: true,
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var precentage = Math.floor(((currentValue / total) * 100) + 0.5);
            return `${precentage}% (${currentValue})`;
          }
        }
      }
    }
  }

  handleClickOnPie(points) {
    if (!points[0]) return;
    const answerTitle = points[0]._view.label || null;
    self.$rootScope.$broadcast('answer_statistic_selected', answerTitle);
  }

}

const component = {
  bindings: {
    chart: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
