import template from './feedback.jade'
import './feedback.styl'

class Controller {

    /*@ngInject*/
    constructor($window, feedbackService, $rootScope) {
        this.$window = $window;
        this.feedbackService = feedbackService;
        this.$rootScope = $rootScope;
    }

    select(style) {
        const opinion = {
            style: style,
            location: this.$window.location.href
        };
        this.feedbackService.sendOpinion(opinion)
            .then(resOpinion => {
                this.$rootScope.$broadcast('opinion.selected', resOpinion);
            })
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
