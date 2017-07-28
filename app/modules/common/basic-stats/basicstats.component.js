import template from './basicstats.jade'

class Controller {

  /*@ngInject*/
  constructor($api, $timeout, pluginsService) {
    this.$api = $api;
    this.$timeout = $timeout;
    this.pluginsService = pluginsService;
    this.stats = {};
    this.init();
  }
  init() {
    // this.authTicker = this.pluginsService.flotTickerChart('authticker');
    this.$timeout(() => {
      this.getStatistic();
    }, 700);
  }
  getStatistic() {
    this.$api.getById('stats', 'all_connects').then((data) => {
      this.stats = data;
    });
    // this.$api.getById('stats', 'authorizations').then((data) => {this.authTicker.update(data.data);});
  }
}
const component = {
  bindings: {},
  template: template(),
  controller: Controller
};
export default component;
