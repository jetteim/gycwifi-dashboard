import template from './lang-switch.jade'
import './lang-switch.styl'

class Controller {

    /*@ngInject*/
    constructor(langService) {
        this.langService = langService;
        this.lang = this.langService.getLang() || 'ru';
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