import BaseService from '../base.service.js';

class RouterService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'routers');
    super.setHelperOptions({
      update: true
    })
  }

  get(params) {
    return super.get(params).then(response => {
      return response.data;
    })
  }

}

export default RouterService;
