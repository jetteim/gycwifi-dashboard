import template from './stars-rating.jade'
import './stars-rating.styl'

class Controller {

  /*@ngInject*/
  constructor($window, opinionsService, $storage, $rootScope) {
    this.opinionsService = opinionsService;
    this.$window = $window;
    this.$storage = $storage;
    this.$rootScope = $rootScope;
  }

  $onInit() {
    this.rating = {};
    this.isReadonly = false;
    this.getRating();
  }

  getRating() {
    this.opinionsService.getRating().then(({ answers_total, average_rating }) => {
      this.rating.answers_total = answers_total;
      this.rating.average_rating = average_rating;
    })
  }

  select(value) {
    this.opinionsService.sendOpinion(value, this.$window.location.href).then(opinion => {
      this.$rootScope.$broadcast('rating.selected', {opinion: opinion, rating: value});
    })
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
