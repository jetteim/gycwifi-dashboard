import pollsPage from './polls-page/polls.component.js'
import poll from './poll/poll.component.js'
import answerStatistic from './poll/answer-statistic/answer-statistic.component.js'
import question from './question/question.component.js'
import pollActivity from './poll/poll-activity/poll-activity.component.js'
import pollPieChart from './poll/poll-pie-chart/poll-pie-chart.component.js'
import control from './poll/control/control.component.js'

import pollService from '../../services/polls/poll.service.js'

const polls = angular.module('polls', []);

polls.component('polls', pollsPage);
polls.component('poll', poll);
polls.component('question', question);
polls.component('answerStatistic', answerStatistic);
polls.component('pollActivity', pollActivity);
polls.component('pollPieChart', pollPieChart);
polls.component('control', control);

polls.service('pollService', pollService);

/* @ngInject */
polls.config($stateProvider => {

    $stateProvider
        .state('dashboard.polls', {
            url: "polls",
            template: "<polls></polls>"
        })
        .state('dashboard.poll', {
            url: "polls/:pollId",
            template: '<poll id="$ctrl.poll.id"></poll>',
            controller: function($stateParams) {
                this.pollId = $stateParams.pollId;
            },
            controllerAs: '$ctrl'
        })

});

export default polls;
