import brandsPage from './brands-page/brands.component.js'
import brandCard from './brand-card/brand-card.component.js'
import brandNew from './brand-new/brand-new.component.js'
import brandEdit from './brand-edit/brand.component.js'
import brandForm from './brand-form/brand-form.component.js'
import brandService from '../../services/brands/brand.service.js'
import LayoutService from '../../services/brands/layout.service.js'

const brands = angular.module('brands', []);

brands.component('brands', brandsPage);
brands.component('brandCard', brandCard);
brands.component('brandNew', brandNew);
brands.component('brand', brandEdit);
brands.component('brandForm', brandForm);

brands.service('brandService', brandService);
brands.service('layoutService', LayoutService);

/* @ngInject */
brands.config($stateProvider => {

  $stateProvider
    .state('dashboard.brands', {
      url: "brands",
      template: "<brands></brands>"
    })
    .state('dashboard.brand', {
      url: "brands/:brandId",
      template: '<brand id="$ctrl.brandId"></brand>',
      controller: function ($stateParams) {
        this.brandId = $stateParams.brandId;
      },
      controllerAs: '$ctrl'
    })
    .state('dashboard.brand.new', {
      url: "/brand/new",
      template: "<brand-new></brand-new>"
    })
});

export default brands;
