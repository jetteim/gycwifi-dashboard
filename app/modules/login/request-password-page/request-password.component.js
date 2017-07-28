import template from './request-password.jade'

class Controller {

    /* @ngInject */
    constructor($state, pluginsService, validationService, langService, $api, $timeout) {
        this.$state= $state;
        this.pluginsService = pluginsService;
        this.langService = langService;
        this.validationService = validationService;
        this.$api = $api;
        this.$timeout = $timeout;
        this.validator = null;

        this.init();
    }

    init() {
        this.lang = this.langService.getLang() || 'ru';
        this.validator = this.validationService.init();
    }

    send() {
        if (!this.validator.valid()) return; // Check inputs

        this.$api.send('request_password', {email: this.email})
        .then((data) => {
            if (data.error) {
                this.error = data.error;
            } else {
                this.error = '';
                this.message = data.message;
                this.isBack = true;
            }
        })
    }

    changeLang(lang) {
        this.langService.setLang(lang);
        this.lang = lang;
    }

    goToLogIn() {
        this.$state.go('login');
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;