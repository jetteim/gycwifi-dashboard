export default class ProfileService {
    /* @ngInject */
    constructor($storage) {
        this.$storage = $storage;
    }

    setProfile(data) {
        try {
            this.$storage.set('profile', data);
        } catch (e) {
            console.error("Profile don't save");
        }
    }

    getProfile() {
        try {
            return this.$storage.get('profile');
        } catch (e) {
            console.error("Profile don't load");
        }
    }

    clearProfile() {
        this.$storage.del('profile');
    }

}