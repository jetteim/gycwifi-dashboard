import template from './layout-form.jade'

class Controller {

    /* @ngInject */
    constructor($api, $handler, $params, validationService) {
        this.$api = $api;
        this.$handler = $handler;
        this.$params = $params;
        this.validationService = validationService;

        this.init();
    }

    init() {
        this.validator = this.validationService.init();
        this.form = {};
        this.layout = {};
        this.layoutCss = {};

        if (this.layoutId) {
            this.getLayout();
        }
    }

    send() {
        if (!this.validator.valid()) return;

        var str = this.$handler.objToCssString(this.layoutCss);
        this.$api.send('layouts', {css: str, title: this.form.title, brand_id: this.brandId})
        .then(this.$handler.renderMessage)
        .catch(this.$handler.renderMessage);
    }

    getLayout() {
        this.$api.getById('layouts', this.layoutId)
        .then((response) => {
            if (response.status === 'ok') {
                this.layout = response.data.layout;
                this.layoutCss = this.$handler.cssStringToObj(this.layout.css);
            }
        })
        .catch(this.$handler.renderMessage)
    }

}


const component = {
    bindings: {
        brandId: '<',
        layoutId: '<'
    },
    template: template(),
    controller: Controller
};

export default component;