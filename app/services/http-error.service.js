class HttpErrorService {

  /* @ngInject */
  constructor($injector, $translate) {
    this.$injector = $injector;
    this.$translate = $translate;
    this.responseError = this.responseError.bind(this);
    this.$message = this.$injector.get('$message');
  }

  responseError(rejection) {
    const code = String(Math.abs(rejection.status));

    let messages = {
      1: {
        title: this.$translate.instant('http-error.1.title'),
        message: this.$translate.instant('http-error.1.message')
      },
      401: {
        title: this.$translate.instant('http-error.401.title'),
        message: this.$translate.instant('http-error.401.message')
      },
      403: {
        title: this.$translate.instant('http-error.403.title'),
        message: this.$translate.instant('http-error.403.message')
      },
      500: {
        title: this.$translate.instant('http-error.500.title'),
        message: this.$translate.instant('http-error.500.message')
      },
      502: {
        title: this.$translate.instant('http-error.502.title'),
        message: this.$translate.instant('http-error.502.message')
      }
    };

    if (!messages[code]) {
      // todo send error to api
      console.log(`HttpErrorService: error code "${code}" is not defined!`);

    } else {
      // Show Alert
      this.$message.error(messages[code].title, messages[code].message);
    }

    // Logout
    if (code === '401') {
      this.$injector.get('profileService').clearProfile();
      this.$injector.get('$auth').logout();
      this.$injector.get('$state').go('login');
    }

    return rejection
  }

}

export default HttpErrorService;
