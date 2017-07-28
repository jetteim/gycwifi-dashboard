import dashboard from './dashboard/dashboard.component'
import sidebar from './side-bar/sidebar.component'
import topbar from './top-bar/topbar.component'
import breadcrumbs from './breadcrumbs/breadcrumbs.component'
import basicstats from './basic-stats/basicstats.component'
import clientstats from './client-stats/clientstats.component'
import selectCategory from './select-category/select-category.component'
import gMap from './g-map/g-map.component'
import imgPreloader from './img-preloader/img-preloader.component'
import langSwitch from './lang-switch/lang-switch.component'
import ratingForm from './rating-form/rating-form.component'
import walkTooltip from './walk-tooltip/walk-tooltip.component'
import tutorialSwitch from './tutorial-switch/tutorial-switch.component'
import spinner from './spinner/spinner.component'
import starsRating from './stars-rating/stars-rating.component'
import uibPagination from './uib-pagination/uib-pagination.component'
import locationsSelect from './locations-select/locations-select.component'

const common = angular.module('common', []);

common.component('dashboard', dashboard);
common.component('sidebar', sidebar);
common.component('topbar', topbar);
common.component('breadcrumbs', breadcrumbs);
common.component('basicstats', basicstats);
common.component('clientstats', clientstats);
common.component('selectCategory', selectCategory);
common.component('gMap', gMap);
common.component('imgPreloader', imgPreloader);
common.component('langSwitch', langSwitch);
common.component('ratingForm', ratingForm);
common.component('walkTooltip', walkTooltip);
common.component('tutorialSwitch', tutorialSwitch);
common.component('spinner', spinner);
common.component('starsRating', starsRating);
common.component('uibPagination', uibPagination);
common.component('locationsSelect', locationsSelect);

/* @ngInject */
common.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise("statistic");

  $stateProvider
    .state('dashboard', {
      abstract: '.statistic',
      url: "/",
      template: "<dashboard></dashboard>"
    })

});

export default common;
