import BaseService from '../base.service.js';

class RewardService extends BaseService {

    /* @ngInject */
    constructor($api, $message) {
        super($api, $message, 'rewards');
    }

    get(params) {
        return super.get(params).then(response => {
            return response.data || null;
        });
    }

}

export default RewardService;
