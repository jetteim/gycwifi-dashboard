export default class ParamsService {
    /* @ngInject */
    constructor() {
        this.params = {};
    }

    get(entity) {
        return this.params[entity] ? this.params[entity] : null;
    }
    set(entity, param) {
        this.params[entity] = param;
    }
    del(entity) {
        delete this.params[entity];
    }

}