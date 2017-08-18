/* @ngInject */
export default ($rootScope, $state, $auth) => {

    $rootScope.$on('$stateChangeStart',
        (event, toState) => {
            if (!$auth.isAuthenticated()) {
                if (['login', 'signup','requestPassword'].includes(toState.name)) return;

                event.preventDefault();
                $state.go('login');
            }
        })
}
