import template from './statistic.jade'

class Controller {

  /* @ngInject */
  constructor($api, pluginsService, $scope, ChartJs, $translate, $rootScope, tutorialService) {
    this.$api = $api;
    this.pluginsService = pluginsService;
    this.$scope = $scope;
    this.$translate = $translate;
    this.$rootScope = $rootScope;
    this.tutorialService = tutorialService;
    this.ChartJs = ChartJs;
    this.filter = 'last30days';
    this.getLocations();
    this.init();
  }

  init() {
    this.getStatistic();
  }

  getLocations() {
    this.$api.getAll('stats/locations_list')
      .then((response) => {
        this.locations = response.data.locations;
        if (this.locations.length === 0 || this.tutorialService.isActive()) {
          this.showWalkTooltip()
        }
        this.locations.unshift({
          address: this.$translate.instant("statistics.address_list.all_addresses")
        });
        this.locations = this.locations.filter((item) => {
          return item.address;
        });
        this.location = response.data.locations[0];
      });
  }

  getStatistic(params) {
    Chart.pluginService.register({
      beforeRender: function(chart) {
        if (chart.config.options.showAllTooltips) {
          // create an array of tooltips
          // we can't use the chart tooltip because there is only one tooltip per chart
          chart.pluginTooltips = [];
          chart.config.data.datasets.forEach(function(dataset, i) {
            chart.getDatasetMeta(i).data.forEach(function(sector, j) {
              chart.pluginTooltips.push(new Chart.Tooltip({
                _chart: chart.chart,
                _chartInstance: chart,
                _data: chart.data,
                _options: chart.options.tooltips,
                _active: [sector]
              }, chart));
            });
          });
          // turn off normal tooltips
          chart.options.tooltips.enabled = false;
        }
      },
      afterDraw: function(chart, easing) {
        if (chart.config.options.showAllTooltips) {
          // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
          if (!chart.allTooltipsOnce) {
            if (easing !== 1)
              return;
            chart.allTooltipsOnce = true;
          }

          // turn on tooltips
          chart.options.tooltips.enabled = true;
          Chart.helpers.each(chart.pluginTooltips, function(tooltip) {
            tooltip.initialize();
            tooltip.update();
            // we don't actually need this since we are not animating tooltips
            tooltip.pivot();
            tooltip.transition(easing).draw();
          });
          chart.options.tooltips.enabled = false;
        }
      }
    });
    var pie_options = {
      showAllTooltips: true,
      cutoutPercentage: 50,
      legend: {
        display: true,
        position: 'left'
      },
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
    var barchart_options = {
      scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      scaleFontColor: '#999',
      scaleFontStyle: '600',
      tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      tooltipCornerRadius: 3,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: true,
        position: 'bottom'
      },
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }

    this.$api.getById('stats', 'new_old_users', params).then((data) => {
      data.series[0] = this.$translate.instant("statistics.charts.clients-chart.new_clients")
      data.series[1] = this.$translate.instant("statistics.charts.clients-chart.returning_clients")
      this.$scope.new_old_users = data
      this.$scope.new_old_users.options = barchart_options;
    });

    this.$api.getById('stats', 'time_pie', params).then((data) => {
      data.labels[0] = this.$translate.instant("statistics.charts.time-pie.morning")
      data.labels[1] = this.$translate.instant("statistics.charts.time-pie.day")
      data.labels[2] = this.$translate.instant("statistics.charts.time-pie.evening")
      data.labels[3] = this.$translate.instant("statistics.charts.time-pie.night")
      this.$scope.time_pie = data
      this.$scope.time_pie.options = pie_options;
    });

    this.$api.getById('stats', 'social_pie', params).then((data) => {
      data.labels[0] = this.$translate.instant("statistics.charts.social-pie.password")
      this.$scope.social_pie = data
      this.$scope.social_pie.options = pie_options;
    });

    this.$api.getById('stats', 'gender_pie', params).then((data) => {
      data.labels[0] = this.$translate.instant("statistics.charts.gender-pie.man")
      data.labels[1] = this.$translate.instant("statistics.charts.gender-pie.woman")
      this.$scope.gender_pie = data
      this.$scope.gender_pie.options = pie_options;
    });

    this.$api.getById('stats', 'age_pie', params).then((data) => {
      data.labels[0] = this.$translate.instant("statistics.charts.age-pie.age1")
      data.labels[1] = this.$translate.instant("statistics.charts.age-pie.age2")
      data.labels[2] = this.$translate.instant("statistics.charts.age-pie.age3")
      data.labels[3] = this.$translate.instant("statistics.charts.age-pie.age4")
      data.labels[4] = this.$translate.instant("statistics.charts.age-pie.age5")
      data.labels[5] = this.$translate.instant("statistics.charts.age-pie.age6")
      this.$scope.age_pie = data
      this.$scope.age_pie.options = pie_options;
    });

    this.$api.getById('stats', 'visitors_pie', params).then((data) => {
      data.labels[0] = this.$translate.instant("statistics.charts.clients-pie.once")
      data.labels[1] = this.$translate.instant("statistics.charts.clients-pie.ten")
      data.labels[2] = this.$translate.instant("statistics.charts.clients-pie.resident")
      this.$scope.visitors_pie = data
      this.$scope.visitors_pie.options = pie_options;
    });

    this.$api.getById('stats', 'new_old_users_pie', params).then((data) => {
      data.labels[0] = this.$translate.instant("statistics.charts.newvstotal-pie.new_clients")
      data.labels[1] = this.$translate.instant("statistics.charts.newvstotal-pie.returning_clients")
      this.$scope.new_old_users_pie = data
      this.$scope.new_old_users_pie.options = pie_options;
    });
  }

  statsupdate() {
    this.params = [];
    this.params.range = this.filter;
    this.params.location_id = this.location.id ? this.location.id : null;
    this.getStatistic({
      'range': this.filter,
      'location_id': this.location.id
    });
  }

  showWalkTooltip() {
    this.$rootScope.$broadcast('walk-tooltip', {
      focus: '#nav_add_location',
      caption: this.$translate.instant('tutorial.start'),
      show: true
    })
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
