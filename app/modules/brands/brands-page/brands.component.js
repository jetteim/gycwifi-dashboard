import template from './brands.jade'

class Controller {

  /* @ngInject */
  constructor($handler, brandService) {
    this.$handler = $handler;
    this.brandService = brandService;
    this.init();
  }

  init() {
    this.brands = [];
    this.isCreateNew = false;
    this.changePageHandler = this.getBrands.bind(this);
    this.getBrands();
  }

  getBrands(pageNum) {
    this.brandService.get({ page: pageNum })
      .then(({ brands, can_create, itemsOnPage, items_count }) => {
        this.brands = brands;
        this.isCreateNew = can_create || false;
        this.itemsOnPage = itemsOnPage || 10;
        this.totalItems = items_count;
    })
  }

  makeNew() {
    this.$handler.createNew('brand', 'brandNew', this.isCreateNew);
  }
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
