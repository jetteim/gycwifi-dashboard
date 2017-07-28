import template from './clients.jade'
import './clients.styl'

class Controller {

  /* @ngInject */
  constructor($scope, pluginsService, clientService) {
    this.$scope = $scope;
    this.pluginsService = pluginsService;
    this.clientService = clientService;
    this.init();
  }

  init() {
    this.clients = [];
    this.locations = [];
    this.loyalty = 'all';
    this.loyaltyDays = '7';

    // set default params
    this.params = {
      visits: 'desc',
      visits30: 'desc',
      updated_at: 'desc'
    };

    this.$scope.$on('ngTableRenderFinished', (ngRepeatFinishedEvent) => {
      //если это раскомментировать, не работает ng-change
      //this.$scope.$destroy('ngTableRenderFinished');
      ngRepeatFinishedEvent.stopPropagation();
      this.pluginsService.initTableJS();
    });

    this.changePageHandler = this.getClients.bind(this);
    this.filterByLocation = this.filterByLocation.bind(this);
    this.getClients();
  }

  getClients(pageNum) {
    this.clientService.get(Object.assign({}, this.params, { page: pageNum }))
      .then(({ clients, itemsOnPage, items_count }) => {
        this.clients = clients;
        this.itemsOnPage = itemsOnPage || 10;
        this.totalItems = items_count;
      })
  }

  selected() {
    this.params.loyalty = this.loyalty;
    this.params.loyalty_days = this.loyaltyDays;
    this.getClients();
  }

  changeSort(field) {
    this.params[field] === 'desc' ? this.params[field] = 'asc' : this.params[field] = 'desc';
    this.params['sort_field'] = field;
    this.getClients();
  }

  filterByLocation(locationId) {
    this.params.location_id = locationId;
    this.getClients();
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
