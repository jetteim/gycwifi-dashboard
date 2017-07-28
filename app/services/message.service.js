export default class MessageService {

  /* @ngInject */
  constructor(pluginsService) {
    this.pluginsService = pluginsService;
  }

  success(msg1, msg2) {
    this.pluginsService.message(String(msg1), String(msg2), 'success');
  }
  ok(msg1, msg2) {
    this.pluginsService.message(String(msg1), String(msg2), 'success');
  }
  error(msg1, msg2) {
    console.log(msg1);
    this.pluginsService.message(String(msg1), String(msg2), 'error');
  }
  confirm(title, text, callback) {
    this.pluginsService.messageConfirm({
        title: title,
        text: text,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Да",
        closeOnConfirm: false,
        closeOnCancel: true
      },
      callback
    );
  }

}
