import template from './img-preloader.jade'

class Controller {

    /*@ngInject*/
    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        this.loading = null;

        // Start image load
        this.$scope.$on('image_load_start', (e, name) => {
            if (this.img != name) return;
            this.loading = 'loading';
        });

        // End image load
       this. $scope.$on('image_loaded', (e, data) => {
            if (this.img != data.entity) return;
            this.loading = 'loaded';
        });

        // If load error
       this.$scope.$on('image_load_error', (e, data) => {
           if (this.img != data) return;
           this.loading = 'error';
       })
    }

}

const component = {
    bindings: {
        img: '<'
    },
    template: template(),
    controller: Controller
};

export default component;