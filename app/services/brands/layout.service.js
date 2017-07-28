import BaseService from '../base.service.js';

class LayoutService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'layouts');
    super.setHelperOptions({
      update: false,
      create: true
    })
  }

  getLayouts() {
    return super.get()
      .then((response) => {
        if (!response.data) return;
        return response.data.layouts;
      });
  }

}

export default LayoutService;
