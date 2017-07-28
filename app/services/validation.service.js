const rules = {
  'login-username': {
    required: true,
    minlength: 3
  },
  'login-password': {
    required: true,
    minlength: 6
  },
  'login-email': {
    required: true
  },
  title: {
    required: true,
    maxlength: 128
  },
  phone: {
    required: true
  },
  'address': {
    required: true,
    maxlength: 250
  },
  'ssid': {
    required: true,
    maxlength: 32
  },
  'ssid_staff': {
    maxlength: 32
  },
  'redirect_url': {
    maxlength: 64
  },
  'bg_color': {
    required: true
  },
  'serial_number': {
    required: true
  },
  'message-subject': {
    required: true,
    minlength: 4,
    maxlength: 140
  },
  'message-msg': {
    required: true,
    minlength: 4,
    maxlength: 500
  },
  'staff_ssid_password': {
    minlength: 8,
    maxlength: 16
  }
};

const defaultMessages = {
  en: {
    required: 'This field is required',
    minlength2: 'Min length is 2 symbols',
    minlength3: 'Min length is 3 symbols',
    minlength4: 'Min length is 4 symbols',
    minlength5: 'Min length is 5 symbols',
    minlength6: 'Min length is 6 symbols',
    minlength7: 'Min length is 7 symbols',
    minlength8: 'Min length is 8 symbols',
    minlength10: 'Min length is 10 symbols',
    maxlength7: 'Max length is 7 symbols',
    maxlength15: 'Max length is 15 symbols',
    maxlength16: 'Max length is 16 symbols',
    maxlength32: 'Max length is 32 symbols',
    maxlength64: 'Max length is 64 symbols',
    maxlength128: 'Max length is 128 symbols',
    maxlength150: 'Max length is 150 symbols',
    maxlength140: 'Max length is 140 symbols',
    maxlength500: 'Max length is 500 symbols',
  },
  ru: {
    required: 'Заполните это поле',
    minlength2: 'Минимальная длина 2 символа',
    minlength3: 'Минимальная длина 3 символа',
    minlength4: 'Минимальная длина 4 символа',
    minlength5: 'Минимальная длина 5 символов',
    minlength6: 'Минимальная длина 6 символов',
    minlength7: 'Минимальная длина 7 символов',
    minlength8: 'Минимальная длина 8 символов',
    minlength10: 'Минимальная длина 10 символов',
    maxlength7: 'Максимальная длина 7 символов',
    maxlength15: 'Максимальная длина 15 символов',
    maxlength16: 'Максимальная длина 16 символов',
    maxlength32: 'Максимальная длина 32 символа',
    maxlength64: 'Максимальная длина 64 символа',
    maxlength150: 'Максимальная длина 150 символов',
    maxlength128: 'Максимальная длина 128 символов',
    maxlength140: 'Максимальная длина 140 символов',
    maxlength500: 'Максимальная длина 500 символов',
    url: 'Неверный формат ссылки'
  }
};

const messages = {
  en: {
    'login-username': {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4
    },
    'login-password': {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4
    },
    'login-email': {
      required: defaultMessages.en.required
    },
    title: {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4,
      maxlength: defaultMessages.en.maxlength128
    },
    phone: {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4,
      maxlength: defaultMessages.en.maxlength16
    },
    'address': {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4,
      maxlength: defaultMessages.en.maxlength150
    },
    'ssid': {
      required: defaultMessages.en.required,
      maxlength: defaultMessages.en.maxlength32
    },
    'ssid_staff': {
      maxlength: defaultMessages.en.maxlength32
    },
    'redirect_url': {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4,
      maxlength: defaultMessages.en.maxlength64
    },
    'bg_color': {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4,
      maxlength: 'Max length is 7 symbols'
    },
    'serial_number': {
      required: defaultMessages.en.required,
      minlength: defaultMessages.en.minlength4
    },
    'message-subject': {
      required: defaultMessages.en.required,
      minlength: 'Min length is 4 symbols',
      maxlength: 'Max length is 140 symbols'
    },
    'message-msg': {
      required: defaultMessages.en.required,
      minlength: 'Min length is 4 symbols',
      maxlength: 'Max length is 140 symbols'
    },
    'staff_ssid_password': {
      minlength: 'Min length is 5 symbols',
      maxlength: 'Max length is 15 symbols'
    }

  },
  ru: {
    'login-username': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4
    },
    'login-password': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength6
    },
    'login-email': {
      required: defaultMessages.ru.required
    },
    title: {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4,
      maxlength: defaultMessages.ru.maxlength128
    },
    phone: {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4,
      maxlength: defaultMessages.ru.maxlength16
    },
    'address': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4,
      maxlength: defaultMessages.ru.maxlength150
    },
    'ssid': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength1,
      maxlength: defaultMessages.ru.maxlength32
    },
    'ssid_staff': {
      minlength: defaultMessages.ru.minlength3,
      maxlength: defaultMessages.ru.maxlength32
    },
    'redirect_url': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4,
      maxlength: defaultMessages.ru.maxlength64,
      url: defaultMessages.ru.url
    },
    'bg_color': {
      required: defaultMessages.ru.required
    },
    'serial_number': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4
    },
    'message-subject': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4,
      maxlength: defaultMessages.ru.maxlength140,
    },
    'message-msg': {
      required: defaultMessages.ru.required,
      minlength: defaultMessages.ru.minlength4,
      maxlength: defaultMessages.ru.maxlength500,
    },
    'staff_ssid_password': {
      minlength: defaultMessages.ru.minlength8,
      maxlength: defaultMessages.ru.maxlength32
    }
  }
};

export default class ValidationService {
  /* @ngInject */
  constructor(langService, jquery) {
    this.langService = langService;
    this.jquery = jquery;
    this.init();
  }
  // Init Login Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation

  init() {
    const $ = this.jquery;
    return $('.js-validation').validate({
      errorClass: 'help-block text-right animated fadeInDown',
      errorElement: 'div',
      errorPlacement: function(error, e) {
        $(e).parents('.form-group > div').append(error);
      },
      highlight: function(e) {
        $(e).closest('.form-group').removeClass('has-error').addClass('has-error');
        $(e).closest('.help-block').remove();
      },
      success: function(e) {
        $(e).closest('.form-group').removeClass('has-error');
        $(e).closest('.help-block').remove();
      },
      rules: rules,
      messages: messages[this.langService.getLang()]
    });
  }
}
