export default class ApiService {

  /* @ngInject */
  constructor($http, $env) {
    this.$http = $http;
    this.$env = $env;
  }

  getUrl() {
    return this.$env.getApiUrl();
  }

  getAll(entity, param) {
    (!param || param[1] == null) ? param = '': param = '?' + param[0] + '=' + param[1];
    return this.$http.get(this.getUrl() + '/' + entity + param)
      .then(function(res) {
        return res.data;
      })
  }

  getById(entity, id, params) {
    return this.$http.get(this.getUrl() + '/' + entity + '/' + id, {
        params: params
      })
      .then((res) => {
        return res.data;
      })
  }

  getByPageNum(entity, pageNum) {
    return this.$http.get(this.getUrl() + '/' + entity + '?page=' + pageNum)
      .then((res) => {
        return res.data;
      })
  }

  getByProvider(entity, provider) {
    return this.$http.get(this.getUrl() + '/' + entity + '?provider=' + provider)
      .then((res) => {
        return res.data;
      })
  }

  create(entity, data, params) {
    return this.$http.post(this.getUrl() + '/' + entity, data, params)
      .then((res) => {
        return res.data;
      })
  }

  update(entity, id, data) {
    return this.$http.put(this.getUrl() + '/' + entity + '/' + id, data)
      .then((res) => {
        return res.data;
      })
  }

  deleteById(entity, id) {
    return this.$http.delete(this.getUrl() + '/' + entity + '/' + id)
      .then((res) => {
        return res.data;
      })
  }

  send(entity, data) {
    return this.$http.post(this.getUrl() + '/' + entity, data)
      .then((res) => {
        return res.data;
      })
  }

  get(entity, params) {
    return this.$http.get(this.getUrl() + '/' + entity, {
        params: params
      })
      .then((res) => {
        return res.data;
      })
  }

}
