import template from './location-card.jade'

class Controller {

    /* @ngInject */
    constructor() {}

}


const component = {
    bindings: {
        location: '<'
    },
    template: template(),
    controller: Controller
};

export default component;