/* @ngInject */
export default ($rootScope, $state, $auth) => {

    $rootScope.$on('$stateChangeStart',
        (event, toState) => {
            if (!$auth.isAuthenticated()) {
                if (toState.name === "login" || toState.name === "requestPassword") return;

                event.preventDefault();
                $state.go('login');
            }
        })
}
