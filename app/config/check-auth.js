/* @ngInject */
export default ($rootScope, $state, $auth, profileService) => {

  $rootScope.$on('$stateChangeStart',
      (event, toState) => {
          if (['login', 'signup','requestPassword'].includes(toState.name)) return;
          if (!$auth.isAuthenticated()) {
            event.preventDefault();
            return $state.go('login');
          } else {
            if(profileService.currentUser()){
              if(profileService.currentUser().canSee(toState.name)) return;
              event.preventDefault();
              $state.go('login');
            }
          }

      });
};
