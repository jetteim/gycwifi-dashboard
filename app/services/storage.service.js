class StorageService {

    /* @ngInject */
    constructor(entity = null) {
        this.entity = entity;
    }

    set(key, val) {
        try {
            localStorage.setItem(key, JSON.stringify(val));
        } catch (e) {
            console.error("Local Storage is not available");
        }
    }
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error("Local Storage is not available");
        }
    }
    getByItem(key, item) {
        var temp = this.get(key);
        if (typeof temp === 'object') {
            return temp[item] ? temp[item] : null;
        }
    }
    del(key) {
        this.set(key, '');
    }

    read(item) {
        const data = this.get(this.entity);
        if (!data) return null;
        return data[item];
    }
    save(key, item) {
        let data = this.get(this.entity);
        if (!data) data = {};
        data[key] = item;
        this.set(this.entity, data);
    }
}

export default StorageService