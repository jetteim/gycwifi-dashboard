export default class LangService {
    /* @ngInject */
    constructor($translate, $api) {
        this.$translate = $translate;
        this.$api = $api;
    }

    saveLang(lang) {
        try {
            localStorage.setItem('lang', lang);
        } catch (e) {
            console.error("Local Storage is not available");
        }
    }
    readLang() {
        try {
            return localStorage.getItem('lang');
        } catch (e) {
            console.error("Local Storage is not available");
        }
    }
    setLang(lang) {
        this.$translate.use(lang);
        this.saveLang(lang);
        this.$api.send('lang', {lang: lang});
    }
    getLang() {
        return this.readLang();
    }
}
