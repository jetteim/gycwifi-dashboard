import template from './routers.jade'

class Controller {

  /* @ngInject */
  constructor(locationService, routerService, pluginsService, $scope, $rootScope, $translate, $handler, tutorialService, $exportService) {
    this.locationService = locationService;
    this.routerService = routerService;
    this.pluginsService = pluginsService;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$translate = $translate;
    this.$handler = $handler;
    this.tutorialService = tutorialService;
    this.$exportService = $exportService;
    this.init();
  }

  init() {
    this.routers = [];
    this.params = {};

    this.$scope.$on('ngRepeatFinished', (ngRepeatFinishedEvent) => {
      //init jquery table plugin
      this.pluginsService.initTableJS();
      ngRepeatFinishedEvent.stopPropagation();
      // this.$scope.$destroy('ngRepeatFinished');
    });
    this.changePageHandler = this.getRouters.bind(this);
    this.getRouters();
  }

  getRouters(pageNum) {
    this.routerService.get(Object.assign({}, this.params, {
        page: pageNum
      }))
      .then(({
        routers,
        itemsOnPage,
        can_create,
        items_count
      }) => {
        this.routers = routers;
        this.itemsOnPage = itemsOnPage || 10;
        this.isCreateNewRouters = can_create || false;
        this.totalItems = items_count;

        if (routers.length === 0 || this.tutorialService.isActive()) {
          this.locationService.get()
            .then((data) => {
              if (data.data.locations.length !== 0) {
                this.showWalkTooltip()
              }
            });
        }
      })
  }

  makeNew() {
    this.$handler.createNew('router', 'routerNew', this.isCreateNewRouters)
  }

  showWalkTooltip() {
    this.$rootScope.$broadcast('walk-tooltip', {
      focus: '#add_router',
      caption: this.$translate.instant('tutorial.add-router'),
      show: true
    })
  }

  routerPackage(router) {
    this.$exportService.routerPackage(router.id);
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
