import template from './locations-select.jade'
import './locations-select.styl'

class Controller {

  /* @ngInject */
  constructor($api, $translate) {
    this.$api = $api;
    this.$translate = $translate;
  }

  $onInit() {
    this.getLocations();
  }

  getLocations() {
    this.$api.getAll('stats/locations_list')
      .then((response) => {
        this.locations = response.data.locations;
        this.locations.unshift({ address: this.$translate.instant("statistics.address_list.all_addresses") });
        this.locations = this.locations.filter((item) => item.address);
        this.location = response.data.locations[0];
      });
  }

}

const component = {
  bindings: {
    change: '<'
  },
  template: template(),
  controller: Controller
};

export default component;
