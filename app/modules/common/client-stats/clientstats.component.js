import template from './clientstats.jade'

class Controller {

  /*@ngInject*/
  constructor($api, $timeout, pluginsService){
    this.$api = $api;
    this.$timeout = $timeout;
    this.pluginsService = pluginsService;
    // this.clients = {};
  }
  $onInit() {
    this.$timeout(() => {
      this.getStatistic();
    }, 700);
  }
  getStatistic() {
    this.$api.getById('stats', 'clients_count').then((data) => {
      this.clients_all_time   = data.data.clients_all_time;
      this.clients_last_month = data.data.clients_last_month;
      this.clients_last_week  = data.data.clients_last_week;
    });
  }
}
const component = {
  bindings: {},
  template: template(),
  controller: Controller
};
export default component;
