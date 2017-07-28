export default class PluginsService {
  /* @ngInject */
  constructor() {}

  initUi() {
    // Init base ui scripts
    OneUI.init();
    OneUI.initHelper('slimscroll');
    OneUI.init('uiBlocks');
    OneUI.initHelper('table-tools');
  }

  // Table sections functionality
  initTableJS() {
    OneUI.initHelper('table-tools');
  }

  initBlocksAPI() {
    OneUI.init('uiBlocks');
  }

  uiAction(action) {
    OneUI.layout(action)
  }

  uiSlideContent(id) {
    OneUI.blocks(id, 'content_toggle')
  }

  colorpicker() {
    // Get each colorpicker element (with .js-colorpicker class)
    jQuery('.js-colorpicker').each(function() {
      var $colorpicker = jQuery(this);

      // Get each colorpicker's init data
      var $colorpickerMode = $colorpicker.data('colorpicker-mode') ? $colorpicker.data('colorpicker-mode') : 'hex';
      var $colorpickerinline = $colorpicker.data('colorpicker-inline') ? true : false;

      // Init colorpicker
      $colorpicker.colorpicker({
        'format': $colorpickerMode,
        'inline': $colorpickerinline
      });
    });
  };

  //Alert Message
  message(msg1, msg2, type) {
    swal(msg1, msg2, type);
  };
  messageConfirm(paramObj, callback) {
    swal(paramObj, callback);
  }

  //Charts
  makeNewDataSets(data, colors) {
    var chartData = {
      labels: [],
      datasets: []
    };
    chartData.labels = data.labels;
    data.datasets.forEach(function(item) {
      var lineBarPie = {
        label: item.label,
        fillColor: item.fillColor || colors[item.label].fill,
        backgroundColor: item.backgroundColor || colors[item.label].fill,
        strokeColor: item.strokeColor || colors[item.label].stroke,
        borderColor: item.backgroundColor || colors[item.label].stroke,
        pointColor: item.pointColor || colors[item.label].stroke,
        pointStrokeColor: item.pointStrokeColor || '#fff',
        pointHighlightFill: item.pointHighlightFill || 'orange',
        pointHighlightStroke: item.pointHighlightStroke || colors[item.label],
        data: item.data
      };
      chartData.datasets.push(lineBarPie);
    });
    return chartData;
  }

  chartPie(selector) {
    var ctx = jQuery('.' + selector)[0].getContext('2d');
    var options = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var precentage = Math.floor(((currentValue / total) * 100) + 0.5);
            return precentage + "%";
          }
        }
      },
      tooltipCornerRadius: 3,
      // responsive: true
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'top',
        fullWidth: true
      },
      showAllTooltips: true
    };

    var chartData = {
      labels: [],
      datasets: [{}]
    };

    var chart = new Chart(ctx, { type: 'pie', data: chartData, options: options });

    return {
      update: (data) => {
        chart.destroy();
        chart = new Chart(ctx, { type: 'pie', data: data, options: options });
      }
    }
  }

  chartLine(selector) {
    var ctx = jQuery('.' + selector)[0].getContext('2d');
    // Set global chart options
    var options = {
      scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      scaleFontColor: '#999',
      scaleFontStyle: '600',
      tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      tooltipCornerRadius: 3,
      maintainAspectRatio: false,
      responsive: true
    };
    // Lines Chart Data
    var chartData = {
      labels: [],
      datasets: [{}]
    };
    // Set styles
    var colors = {
      Twitter: {
        stroke: 'rgba(28,157,237,1)',
        fill: 'rgba(28,157,237,0)'
      },
      Google: {
        stroke: 'rgba(220,120,220,1)',
        fill: 'rgba(220,220,220,0)'
      },
      Facebook: {
        stroke: 'rgba(33,92,99,1)',
        fill: 'rgba(33,92,99,0)'
      },
      Instagram: {
        stroke: 'rgba(168,56,88,1)',
        fill: 'rgba(168,56,88,0)'
      },
      Vk: {
        stroke: 'rgba(80,114,153,1)',
        fill: 'rgba(80,114,153,0)'
      },
      Password: {
        stroke: 'rgba(89,115,38,1)',
        fill: 'rgba(89,115,38,0)'
      },
      "All clients": {
        stroke: 'rgba(80,114,153,1)',
        fill: 'rgba(80,114,153,.3)'
      },
      "New users": {
        stroke: 'rgba(89,115,38,1)',
        fill: 'rgba(89,115,38,.3)'
      }
    };

    var chart = new Chart(ctx, { type: 'line', data: chartData, options: options });

    return {
      update: (data) => {
        chart.destroy();
        chart = new Chart(ctx, { type: 'line', data: this.makeNewDataSets(data, colors), options: options });
      }
    }
  }

  chartBar(selector) {
    var ctx = jQuery('.' + selector)[0].getContext('2d');

    // Set global chart options
    var options = {
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
      },
      maintainAspectRatio: false
    };

    // Lines Chart Data
    var chartData = {
      labels: [],
      datasets: []
    };

    // Set styles
    var colors = {
      "Вернувшиеся клиенты": {
        stroke: 'rgba(80,114,153,.8)',
        fill: 'rgba(80,114,153,.8)'
      },
      "Новые клиенты": {
        stroke: 'rgba(89,115,38,.8)',
        fill: 'rgba(89,115,38,.8)'
      }
    };

    var chart = new Chart(ctx, { type: 'bar', data: chartData, options: options });

    return {
      update: (data) => {
        chart.destroy();
        chart = new Chart(ctx, { type: 'bar', data: this.makeNewDataSets(data, colors), options: options });
      }
    }
  };

}
