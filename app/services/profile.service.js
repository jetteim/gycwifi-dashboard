export default class ProfileService {
  /* @ngInject */
  constructor($storage, $api, $auth, $state) {
    this.$storage = $storage;
    this.$api = $api;
    this.$auth = $auth;
    this.$state = $state;
  }

  setProfile(data) {
    try {
      this.$storage.set('profile', data);
    } catch (e) {
      console.error("Profile hasn't been saved");
    }
  }

  getProfile() {
    if (this.$storage.get('profile')) {
      return this.$storage.get('profile');
    }
    console.error('can`t load profile');
    return this.logout();
  }

  clearProfile() {
    this.$storage.del('profile');
  }

  userInfo() {
    if (this.getProfile() && this.getProfile().user_info) {
      let user = this.getProfile().user_info;
      return {
        id: user.id,
        role: user.role,
        canSee: (category) => {
          return (user.permissions[category] ? true : false);
        },
      };
    }
    this.logout();
  }

  logout() {
    this.$auth.logout();
    this.clearProfile();
    this.$state.go('login');
  }

}
