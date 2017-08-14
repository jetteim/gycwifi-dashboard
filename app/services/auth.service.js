export default class AuthService {
    /* @ngInject */
    constructor($http, $env, profileService) {
        this.$http = $http;
        this.$env = $env;
        this.profileService = profileService;
    }

    login(query) {
        return this.$http.post(this.$env.getApiUrl() + '/auth/password', query).then((data) => {
          this.profileService.setProfile(data.data);
          return data.data;
        });
    }

}
