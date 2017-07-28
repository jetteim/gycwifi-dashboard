import template from './breadcrumbs.jade'

class Controller {

    /*@ngInject*/
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;

        this.init();
    }

    init() {
        this.stateName = 'sidebar.' + this.breadcrumbsService.get();
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;