export default class ExportService {

  /* @ngInject */
  constructor($api, FileSaver, Blob) {
    this.$api = $api;
    this.FileSaver = FileSaver;
    this.Blob = Blob;
  }

  amoCRM() {
    return this.$api.get('/export_to_amo')
      .then((response) => {
        const file = new this.Blob([response], {
          type: 'application/text'
        });
        this.FileSaver.saveAs(file, 'amocrm.csv');
      });
  }

  MailChimp() {
    return this.$api.get('/export_to_mailchimp')
      .then((response) => {
        const file = new this.Blob([response], {
          type: 'application/text'
        });
        this.FileSaver.saveAs(file, 'mailchimp.csv');
      });
  }

  poll(id) {
    return this.$api.get(`polls/${id}/export_to_xlsx`)
      .then((response) => {
        function s2ab(s) {
          let buf = new ArrayBuffer(s.length);
          let view = new Uint8Array(buf);
          for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        }
        const blob = new Blob([s2ab(atob(response))], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        this.FileSaver.saveAs(blob, "poll_statistic.xlsx");
      });
  }

  routerPackage(id) {
    return this.$api.get(`routers/${id}/package`)
      .then((response) => {
        const file = new this.Blob([response], {
          type: 'application/zip'
        });
        this.FileSaver.saveAs(file, `client${id}.zip`);
      });
  }
}
