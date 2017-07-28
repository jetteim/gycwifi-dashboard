export default class HandlerService {

  /* @ngInject */
  constructor($state, $message, $translate) {
    this.$state = $state;
    this.$message = $message;
    this.$translate = $translate
  }

  createNew(entity, state, isCreate) {
    if (isCreate) {
      this.$state.go(state);
    } else {
      this.$message.error('error', this.$translate.instant("general.cannot_create", {
        entity: this.$translate.instant(`general.entity.${entity}`)
      }))
    }
  }
  upperToDash(propertyName) {
    function upperToHyphenLower(match) {
      return '-' + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  }
  dashToUpper(propertyName) {
    function hyphenLowerToUpper(match) {
      return match[1].toUpperCase();
    }
    return propertyName.replace(/-+[a-z]/g, hyphenLowerToUpper);
  }
  objToCssString(obj) {
    if (!obj) return '';
    var keys = Object.keys(obj);
    var result = '';
    for (var i = 0; i < keys.length; i++) {
      result += '.' + this.upperToDash(keys[i]) + '{' + obj[keys[i]] + '}';
    }
    return result;
  }
  cssStringToObj(str) {
    if (!str) return null;
    var result = {};
    var arr = str.split('.');

    for (var i = 1; i < arr.length; i++) {
      var temp = arr[i].split('{');
      var key = this.dashToUpper(temp[0]);
      result[key] = temp[1].split('}')[0];
    }
    return result;
  }

  renderMessage(response) {
    if (response.status === 'ok') {
      this.$message.success(response.status, response.message);
    } else {
      this.$message.error(response.status + '', response.message || response.statusText);
    }
  }

}
