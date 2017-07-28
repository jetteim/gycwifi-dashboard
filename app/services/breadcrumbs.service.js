export default class BreadCrumbsService {
    /* @ngInject */
    constructor($state) {
        this.$state = $state;
    }

    get() {
        var str = (this.$state.current.name).split('.');
        return str[str.length - 1];
    }

}