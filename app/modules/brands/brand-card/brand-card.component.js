import template from './brand-card.jade'

class Controller {

    /* @ngInject */
    constructor($env) {
        this.$env = $env;
        this.loginUrl = this.$env.getLoginUrl();
    }

}


const component = {
    bindings: {
        brand: '='
    },
    template: template(),
    controller: Controller
};

export default component;