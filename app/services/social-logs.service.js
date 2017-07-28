import BaseService from './base.service.js';

class SocialLogsService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'social_logs');
  }

  get(params) {
    return super.get(params)
      .then(response => {
        return response.data || null;
      })
  }

}

export default SocialLogsService;
