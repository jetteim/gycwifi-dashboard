import template from './uib-pagination.jade'
import './uib-pagination.styl'

class Controller {

    /*@ngInject*/
    constructor($scope) {
        this.$scope = $scope;
        this.maxSize = 4;
        this.currentPage = 1;
    }

}

const component = {
    bindings: {
        totalItems: '<',
        itemsOnPage: '<',
        onChange: '<'
    },
    template: template(),
    controller: Controller
};

export default component;