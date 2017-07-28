import template from './authorizations.jade'

class Controller {

  /* @ngInject */
  constructor(pluginsService, $scope, socialLogsService) {
    this.pluginsService = pluginsService;
    this.$scope = $scope;
    this.socialLogsService = socialLogsService;
    this.init();
  }

  init() {
    // default params
    this.params = {
      range: 'last30days'
    };
    this.pluginsService.initBlocksAPI();
    this.$scope.$on('ngRepeatFinished', (ngRepeatFinishedEvent) => {
      ngRepeatFinishedEvent.stopPropagation();
      //если это раскомментировать, не работает ng-change
      // this.$scope.$destroy('ngRepeatFinished');
      this.pluginsService.initTableJS();
    });
    this.changePageHandler = this.getAuthorizations.bind(this);
    this.statsupdate = this.statsupdate.bind(this);
    this.getAuthorizations();
  }

  getAuthorizations(pageNum) {
    this.socialLogsService.get(Object.assign({}, this.params, { page: pageNum }))
      .then(({ social_logs, itemsOnPage, items_count }) => {
        this.itemsOnPage = itemsOnPage || 50;
        this.authorizations = social_logs;
        this.totalItems = items_count;
      })
  }

  statsupdate(locationId) {
    this.params.location_id = locationId;
    this.getAuthorizations();
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
