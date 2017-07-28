import BaseService from '../base.service.js';

class OpinionsService extends BaseService {

    /* @ngInject */
    constructor($api, $message) {
        super($api, $message, 'opinions');
        super.setHelperOptions({
            create: false,
            update: false
        });
        this.$api = $api;
        this.lastNegative = 3;
    }

    getRating() {
        return this.$api.get('opinion_rating').then(response => {
            return response.data
        })
    }

    sendOpinion(rating, location) {
        const opinion = {
            style: this.getStyle(rating),
            location: location
        };
        return super.create(opinion).then(response => {
            if (response.data) {
                return response.data.opinion;
            }
        })
    }

    getStyle(value) {
        return value > this.lastNegative ? 'positive' : 'negative';
    }
}

export default OpinionsService;
