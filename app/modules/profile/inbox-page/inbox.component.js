import template from './inbox.jade'
import './inbox.styl'

class Controller {

  /* @ngInject */
  constructor($scope, notificationService, pluginsService) {
    this.$scope = $scope;
    this.notificationService = notificationService;
    this.pluginsService = pluginsService;
    this.init();
  }

  init() {
    this.params = {};
    this.form = {};
    this.$scope.$on('ngRepeatFinished', (ngRepeatFinishedEvent) => {
      this.pluginsService.initTableJS();
      ngRepeatFinishedEvent.stopPropagation();
    });
    this.changePageHandler = this.getNotifications.bind(this);
    this.getNotifications();
  }

  getNotifications(pageNum) {
    this.notificationService.get(Object.assign({}, this.params, { page: pageNum }))
      .then(({ notifications, itemsOnPage, items_count }) => {
        this.notifications = notifications;
        this.itemsOnPage = itemsOnPage || 10;
        this.pages = items_count;
      })
  }

  markRead(notification) {
    if (!notification.seen) {
      notification.seen = true;
      this.update(notification)
    }
  }

  toggle(event, notification, entity) {
    event.stopPropagation();
    notification[entity] = !notification[entity];
    this.update(notification)
  }

  update(notification) {
    this.notificationService.update(notification.id, notification)
  }

}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;
