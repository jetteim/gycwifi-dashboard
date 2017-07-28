import env from '../config/env.js'

export default class EnvService {
    constructor() {
        this.env = env;
    }

    getApiUrl() {
        return this.env.get('host_api');
    }

    getLoginUrl() {
        return this.env.get('host_login');
    }
}