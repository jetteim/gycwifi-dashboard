import template from './layouts.jade'

class Controller {

    /* @ngInject */
    constructor($api, $params, $state) {
        this.$api = $api;
        this.$params = $params;
        this.$state = $state;
    }

    $onInit() {
        this.layouts = [];
        this.getLayouts();
    }

    // Get all layouts by brand_id
    getLayouts() {
        this.$api.get('layouts', {brand_id: this.brandId})
        .then((response) => {
            this.layouts = response.data.layouts;
        })
    }

    edit() {
        this.$state.go('dashboard.layout');
    }
}


const component = {
    bindings: {
        brandId: '<'
    },
    template: template(),
    controller: Controller
};

export default component;