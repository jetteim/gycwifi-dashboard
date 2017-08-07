import BaseService from '../base.service.js';

class FeedbackService extends BaseService {

    /* @ngInject */
    constructor($api, $message) {
        super($api, $message, 'opinions');
        super.setHelperOptions({
            create: false,
            update: false
        });
    }

    sendOpinion(opinion) {
        return super.create(opinion).then(response => {
            if (response.data) {
                return response.data.opinion;
            }
        })
    }
}

export default FeedbackService;
