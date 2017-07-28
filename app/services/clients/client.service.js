import BaseService from '../base.service.js';

class ClientService extends BaseService {

    /* @ngInject */
    constructor($api, $message) {
        super($api, $message, 'clients');
    }

    get(params) {
        return super.get(params).then(response => {
            return response.data || null;
        })
    }

}

export default ClientService;