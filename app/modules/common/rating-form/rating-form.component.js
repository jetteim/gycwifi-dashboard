import template from './rating-form.jade'
import './rating-form.styl'

class Controller {

    /*@ngInject*/
    constructor(opinionsService, $window, $storage, $scope) {
        this.opinionsService = opinionsService;
        this.$window = $window;
        this.$storage = $storage;
        this.$scope = $scope;
        this.message = '';
    }

    $onInit() {
        this.rating = 0;
        this.$scope.$on('rating.selected', (e, { opinion, rating }) => {
            this.opinion = opinion;
            this.rating = rating;
        })
    }

    send() {
        const feedback = {
            message: this.message,
            style: this.opinionsService.getStyle(this.rating)
        };
        this.opinionsService.update(this.opinion.id, feedback);
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;