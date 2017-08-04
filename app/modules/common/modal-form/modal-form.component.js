import template from './modal-form.jade'

class Controller {

    /*@ngInject*/
    constructor(feedbackService, $window) {
        this.feedbackService = feedbackService;
        this.$window = $window;
        this.message = '';
    }

    send() {
        const feedback = {
            opinions: {
                message: this.message,
                location: this.$window.location.href,
                style: this.msgType
            }
        };
        if (this.message != '' && this.message.length < 501) {
            this.feedbackService.create(feedback);
        }
    }

}

const component = {
    bindings: {
        msgType: '<'
    },
    template: template(),
    controller: Controller
};

export default component;
