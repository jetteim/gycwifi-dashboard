import BaseService from '../base.service.js';

class LocationService extends BaseService {

  /* @ngInject */
  constructor($api, $message) {
    super($api, $message, 'locations');
    super.setHelperOptions({
      update: false,
      create: true
    })
  }

  getLocation(id) {
    return super.getById(id)
      .then(function(response) {
        return response ? (response.data ? response.data.location : null) : null;
      });
  }

  mergeObjects(object1, object2, method) {
    if (!object1) {
      object1 = {};
    }
    for (var key in object2) {
      if (key === 'id') {
        object1.brand_id = object2[key];
        continue;
      }
      if (key === 'created_at' || key === 'updated_at') {
        continue;
      }
      if (!object1[key] && (!method || method === 'soft')) {
        object1[key] = object2[key];
      } else if (method === 'force') {
        object1[key] = object2[key];
      }
      if (typeof object2[key] === 'number' || typeof object2[key] === 'boolean') {
        object1[key] += '';
      }
    }
    return object1;
  }

}

export default LocationService;
