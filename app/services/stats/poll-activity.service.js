import BaseService from '../base.service.js';

class PollActivityService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'stats/poll_activity');
  }

  get(poll_id) {
    return super.get(poll_id).then(response => {
      return response.data;
    })
  }

}

export default PollActivityService;
