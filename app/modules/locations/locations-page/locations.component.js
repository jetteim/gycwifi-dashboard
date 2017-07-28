import template from './locations.jade'

class Controller {

  /* @ngInject */
  constructor(locationService, $scope, $handler, $rootScope, $translate, tutorialService) {
    this.locationService = locationService;
    this.$scope = $scope;
    this.$handler = $handler;
    this.$translate = $translate;
    this.$rootScope = $rootScope;
    this.tutorialService = tutorialService;
    this.init();
  }

  init() {
    this.locations = [];
    this.isCreateNewLocations = false;
    this.changePageHandler = this.getLocations.bind(this);
    this.getLocations();
  }

  getLocations(pageNum) {
    this.locationService.get({
        page: pageNum
      })
      .then(response => {
        this.itemsOnPage = response.data.itemsOnPage || 20;
        this.totalItems = response.data.items_count;
        this.locations = response.data.locations;
        if (this.locations.length === 0 || this.tutorialService.isActive()) {
          this.showWalkTooltip()
        }
        this.isCreateNewLocations = response.data.can_create || false;
        this.$scope.$emit('locations_loaded', this.locations);
      })
  }

  makeNew() {
    this.$handler.createNew('location', 'locationNew', this.isCreateNewLocations)
  }

  showWalkTooltip() {
    this.$rootScope.$broadcast('walk-tooltip', {
      focus: '#add_location',
      caption: this.$translate.instant('tutorial.add-location'),
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
