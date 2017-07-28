import template from './congratulations-form-email.jade'

class Controller {

    /* @ngInject */
    constructor($api, $message, validationService) {
        this.$api = $api;
        this.$message = $message;
        this.validationService = validationService;
        this.validator = null;

        this.init();
    }

    init() {
        this.validator = this.validationService.init();
        this.setDefaultValues();
    }

    setDefaultValues() {
        this.msg = {
            interval: '7'
        }
    }

    send() {
        if (!this.validator.valid()) return;

        this.$api.send('email_congratulations', this.msg)
        .then((response) => {
            if (response.status === 'ok') {
                this.$message.success(response.status, response.message);
                this.setDefaultValues();
            } else {
                this.$message.error(response.status, response.message);
            }
        })
        .catch()
    }
}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;