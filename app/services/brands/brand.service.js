import BaseService from '../base.service.js';

class BrandService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'brands');
    super.setHelperOptions({
      update: true,
      create: true
    })
  }

  get(params) {
    return super.get(params).then(response => {
      return response.data;
    })
  }

  getBrand(id) {
    return super.getById(id)
      .then(function(response) {
        return response ? (response.data ? response.data.brand : null) : null;
      });
  }

}

export default BrandService;
