import './index.styl'

// Modules
import common from './modules/common'
import statistic from './modules/statistic'
import authorizations from './modules/authorizations'
import profile from './modules/profile'
import brands from './modules/brands'
import locations from './modules/locations'
import clients from './modules/clients'
import routers from './modules/routers'
import login from './modules/login'
import manage from './modules/manage'
import market from './modules/market'
import vips from './modules/vips'
import congratulations from './modules/congratulations'
import help from './modules/help'
import layouts from './modules/layouts'
import sales from './modules/sales'
import polls from './modules/polls'
import opinions from './modules/opinions'
import vouchers from './modules/vouchers'

// Services
import JqueryService from './services/jquery.service'
import EnvService from './services/env.service'
import ExportService from './services/export.service'
import ApiService from './services/api.service'
import AuthService from './services/auth.service'
import ProfileService from './services/profile.service'
import EventsService from './services/events.service'
import GMapService from './services/gmap.service'
import HandlerService from './services/handler.service'
import MessageService from './services/message.service'
import ParamsService from './services/params.service'
import LangService from './services/lang.service'
import BreadCrumbsService from './services/breadcrumbs.service'
import StorageService from './services/storage.service'
import UploadService from './services/upload.service'
import ValidationService from './services/validation.service'
import PluginsService from './services/plugins.service'
import OpinionsService from './services/opinions/opinions.service'
import HttpErrorService from './services/http-error.service'
import TutorialService from './services/tutorial.service'
import PollActivityService from './services/stats/poll-activity.service'

// Directives
import jsTabs from './directives/bootstrap.tabs.directive'
import jsTableSections from './directives/table-header.directive'
import jsSlimscroll from './directives/slimscroll.directive'
import ngUpload from './directives/ng-upload.directive'
import onFinishRender from './directives/on-finish-render.directive'
import ngAccordion from './directives/ng-accordion.directive'

// configs
import interceptors from './config/interceptors'
import satellizer from './config/satellizer'
import charts from './config/charts'
import language from './config/language'
import checkAuth from './config/check-auth'

// App init
const app = angular.module('app', [
  'ngMessages',
  'ngFileSaver',
  'ui.router',
  'chart.js',
  'ng-walkthrough',
  'pascalprecht.translate',
  'satellizer',
  'colorpicker.module',
  'ui.mask',
  'ui.bootstrap',
  'common',
  'login',
  'statistic',
  'authorizations',
  'profile',
  'brands',
  'locations',
  'manage',
  'clients',
  'routers',
  'market',
  'vips',
  'congratulations',
  'help',
  'layouts',
  'sales',
  'polls',
  'opinions',
  'vouchers'
]);

app.factory('jquery', JqueryService);
app.service('$env', EnvService);
app.service('$api', ApiService);
app.service('authService', AuthService);
app.service('profileService', ProfileService);
app.service('eventsService', EventsService);
app.service('gMapService', GMapService);
app.service('$handler', HandlerService);
app.service('$message', MessageService);
app.service('$params', ParamsService);
app.service('langService', LangService);
app.service('breadcrumbsService', BreadCrumbsService);
app.service('$storage', StorageService);
app.service('uploadService', UploadService);
app.service('validationService', ValidationService);
app.service('pluginsService', PluginsService);
app.service('$exportService', ExportService);
app.service('opinionsService', OpinionsService);
app.service('httpErrorService', HttpErrorService);
app.service('tutorialService', TutorialService);
app.service('pollActivityService', PollActivityService);

app.directive('ngUpload', ngUpload);
app.directive('onFinishRender', onFinishRender);
app.directive('ngAccordion', ngAccordion);
app.directive('jsTabs', jsTabs);
app.directive('jsTableSections', jsTableSections);
app.directive('jsSlimscroll', jsSlimscroll);


// init charts
app.config(charts);
// init interceptors
app.config(interceptors);

// init Satellizer Provider
app.config(satellizer);

// init Language Provider
app.config(language);

// Check auth
app.run(checkAuth);
