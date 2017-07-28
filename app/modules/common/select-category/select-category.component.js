import template from './select-category.jade'

class Controller {

    /* @ngInject */
    constructor() {}
}

const component = {
    bindings: {
        selectId: '<',
        options: '='
    },
    template: template(),
    controller: Controller
};

export default component;