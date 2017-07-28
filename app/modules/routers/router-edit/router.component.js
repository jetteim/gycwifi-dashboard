import template from './router-edit.jade'

class Controller {

    /* @ngInject */
    constructor($state, $stateParams, $api, $message) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$api = $api;
        this.$message = $message;

        this.init();
    }

    init() {
        this.getRouter();
    }

    getRouter() {
        this.$api.getById('routers', this.id)
        .then((response) => {
            this.router = response.data.router;
        });
    }

    deleteRouter() {
        const $this = this;
        this.$message.confirm('Удалить', 'Вы уверены?', () => {
            $this.$api.deleteById('routers', $this.id)
                .then((res) => {
                    $this.$message[res.status](res.status, res.message);
                    $this.$state.go('dashboard.routers');
                })
                .catch(function(e) {
                    $this.$message.error('Error', e.data.error);
                })
        });
    }

}

const component = {
    bindings: {
        id: '<'
    },
    template: template(),
    controller: Controller
};

export default component;