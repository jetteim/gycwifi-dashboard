import template from './brand-new.jade'

class Controller {

    /* @ngInject */
    constructor() {}

    $onInit() {
        this.brand = {
            sms_auth: 'true',
            auth_expiration_time: '900',
            redirect_url: 'https://gycwifi.com',
            category_id: '1',
            layout_id: '1'
        };
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
