import template from './question.jade'

class Controller {

    /* @ngInject */
    constructor(pollService) {
        this.pollsService = pollService;
    }
    add() {
        this.question.answers.push('');
    }
    remove(answer) {
        this.question.answers = this.question.answers.filter((item) => {
            if (item !== answer) return true;
        });
    }
    removeQuestion(question) {
        this.questions = this.questions.filter((item) => {
            if (item !== question) return true;
        });
    }
}

const component = {
    bindings: {
        question: '=',
        questions: '='
    },
    template: template(),
    controller: Controller
};

export default component;