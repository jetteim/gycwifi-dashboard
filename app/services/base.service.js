export default class BaseService {

  constructor($api, $message, entity) {
    this._entity = entity;
    this.$api = $api;
    this.$message = $message;
    this.helper = {};
    this._init();
  }

  _init() {
    this.setHelperOptions({
      get: false,
      create: false,
      remove: true,
      update: true
    });
  }

  setHelperOptions(options) {
    if (typeof options !== 'object') return;
    for (let option in options) {
      this.helper[option] = options[option];
    }
  }

  isHelperGet() {
    return this.helper.get;
  }
  isHelperCreate() {
    return this.helper.create;
  }
  isHelperRemove() {
    return this.helper.remove;
  }
  isHelperUpdate() {
    return this.helper.update;
  }
  isHelperDelete() {
    return this.helper.delete;
  }

  get(params) {
    return this.$api.get(this._entity, params)
      .then((response) => {
        if (this.isHelperGet()) {
          // todo
        }
        return response;
      });
  }

  getById(id, params) {
    return this.$api.getById(this._entity, id, params)
      .then((response) => {
        if (this.isHelperGet()) {
          // todo
        }
        return response;
      });
  }

  create(data) {
    return this.$api.send(this._entity, data)
      .then((response) => {
        if (this.isHelperCreate()) {
          if (response.status === 'ok') {
            this.$message.success(response.status, response.message);
          } else {
            this.$message.error(response.status, response.message || response.error);
          }
        }
        return response;
      })
      .catch((e) => {
        if (!this.isHelperRemove()) return;
        this.$message.error('Error', e.data.error);
      })
  }

  update(id, data) {
    return this.$api.update(this._entity, id, data)
      .then((response) => {
        if (this.isHelperUpdate()) {
          if (response.status === 'ok') {
            this.$message.success(response.status, response.message);
            return response;
          } else {
            this.$message.error(response.status, response.message || response.error);
          }
        } else {
          return response;
        }
      })
      .catch((e) => {
        if (!this.isHelperRemove()) return;
        this.$message.error('Error', e.data.error);
      })
  }

  remove(id) {
    if (!this.isHelperRemove()) {
      return this.$api.deleteById(this._entity, id);
    }
    const $this = this;
    return new Promise((resolve, reject) => {
      this.$message.confirm('Удалить', 'Вы уверены?', () => {
        return $this.$api.deleteById($this._entity, id)
          .then((res) => {
            // todo if not status
            $this.$message[res.status || 'success'](res.status, res.message);
            resolve(res);
          })
          .catch(function(e) {
            $this.$message.error('Error', e.data.error);
            reject(e)
          })
      });
    })
  }

}
