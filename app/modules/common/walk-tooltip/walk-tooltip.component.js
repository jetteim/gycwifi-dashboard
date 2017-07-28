import template from './walk-tooltip.jade'

class Controller {

    /*@ngInject*/
    constructor($scope, $window) {
        this.$scope = $scope;
        this.$window = $window;
        this.$scope.$on('walk-tooltip', this.handler.bind(this));
    }

    $onInit() {
        this.show = false;
        this.active = false;
        this.focus = '';
        this.caption = 'Text';
    }

    handler(e, { caption, focus, show }) {
        this.$window.scrollTo(0, 0);
        this.focus = focus || '';
        this.caption = caption || '';
        this.show = show || false;
        this.active = show || false;
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
