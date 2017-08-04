import BaseService from '../base.service.js';

class FeedbackService extends BaseService {

    /* @ngInject */
    constructor($api, $message) {
        super($api, $message, 'opinions');
    }

}

export default FeedbackService;
