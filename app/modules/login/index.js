import loginPage from './login-page/login.component'
import requestPasswordPage from './request-password-page/request-password.component'

const login = angular.module('login', []);

login.component('login', loginPage);
login.component('signup', loginPage);
login.component('requestPassword', requestPasswordPage);

/* @ngInject */
login.config(($stateProvider) => {

    $stateProvider
        .state('login', {
            url: "/login",
            template: '<login class="login-component"></login>',
            data: { loginState: true },
        })
        .state('signup', {
           url: "/signup",
           template: '<signup class="signup-component"></signup>',
           data: { loginState: false },
        })
        .state('requestPassword', {
            url: "/request-password",
            template: "<request-password class='request-password'></request-password>"
        });

});

export default login;
