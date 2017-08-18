window.ENV = process.env.NODE_ENV || 'development';

const config = {
  development: {
    host_api: 'http://api.dev.app:3000',
    host_login: 'http://login2.lvh.me:3000'
  },
  staging: {
    host_api: 'http://api-staging.gycwifi.com',
    host_login: 'http://login2.gycwifi.com'
  },
  production: {
    host_api: 'https://api.gycwifi.com',
    host_login: 'https://login.gycwifi.com'
  }
};

export default {
  get: (key) => {
    return config[ENV][key];
  }
}
