import template from './congratulations.jade'

class Controller {

    /* @ngInject */
    constructor($api) {
        this.$api = $api;
    }

    send() {
        this.$api.send('email_congratulations', this.msg);
    }
}


const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
