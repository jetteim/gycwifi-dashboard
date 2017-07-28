import BaseService from '../base.service.js';

class NotificationService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'notifications');
    super.setHelperOptions({
      update: false
    })
  }

  get(params) {
    return super.get(params).then(response => {
      return response.data || [];
    })
  }

}

export default NotificationService;
