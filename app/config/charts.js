/* @ngInject */
export default (ChartJsProvider) => {
    // Configure all charts
    ChartJsProvider.setOptions({
      // colors: [
      //   'rgba(28,157,237,1)',
      //   'rgba(220,120,220,1)',
      //   'rgba(33,92,99,1)',
      //   'rgba(168,56,88,1)',
      //   'rgba(80,114,153,1)',
      //   'rgba(89,115,38,1)',
      //   'rgba(80,114,153,1)',
      //   'rgba(89,115,38,1)'
      // ]
    });
    ChartJsProvider.setOptions('pie', {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var precentage = Math.floor(((currentValue/total) * 100)+0.5);
            return precentage + "%";
          }
        }
      },
      tooltipCornerRadius: 3,
      maintainAspectRatio: false,
      legend: {
          display: true,
          position: 'bottom',
          fullWidth: true
      },
      showAllTooltips: true
    })
}
