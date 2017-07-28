import template from './login.jade'
import './login.styl'

class Controller {

    /* @ngInject */
    constructor($auth, $state, $location, $message, $scope, authService, profileService, langService, validationService) {
        this.$auth = $auth;
        this.$state= $state;
        this.$location = $location;
        this.$message = $message;
        this.$scope = $scope;
        this.authService = authService;
        this.profileService = profileService;
        this.langService = langService;
        this.validationService = validationService;

        this.init();
    }

    init() {
        if (this.$auth.isAuthenticated()) this.$state.go('dashboard.statistic');
        this.validator = this.validationService.init();
        this.loginForm = true;
        this.lang = this.langService.getLang() || 'ru';
    }

    authenticate(provider) {
        if (provider !== 'password') {
            this.authBySocial(provider);
        } else {
            this.authByPass();
        }
    }

    authBySocial(provider) { // Social authenticate
        this.$auth.authenticate(provider)
        .then((data) => {
            if (!data.data.auth) {
                this.$message.error('Oops...', 'Login or password is incorrect!');
                return;
            }
            this.profileService.setProfile(data.data);
            this.$state.go('dashboard.statistic');
        }).catch((e) => {
            console.error(`dashboard auth by social - ${e}`);
        });
    }

    authByPass() { // Password authenticate
        if (!this.validator.valid()) return; // Check inputs

        var form = {
            username: this.username,
            password: this.password,
            email: this.email,
            redirectUri: window.location.origin
        };
        if (!form.email) delete form.email;

        this.authService.login(form)
        .then((user) => {
            if (!user.auth) {
                this.$message.error('Error', 'Login or password is incorrect!');
                return;
            }
            this.$auth.setToken(user.token);
            this.$state.go('dashboard.statistic');
        })
        .catch((e) => {
            this.$message.error('Error', e.statusText);
        });
    }

    signInSignUp() {
        this.loginForm = !this.loginForm;
    }

    changeLang(lang) {
        this.langService.setLang(lang);
        this.lang = lang;
    }

}

const component = {
    bindings: {},
    template: template(),
    controller: Controller
};

export default component;
