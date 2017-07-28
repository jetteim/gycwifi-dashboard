/* @ngInject */
export default ($translateProvider) => {

    $translateProvider.useStaticFilesLoader({
        prefix: '/locales/',
        suffix: '.json'
    });
    var language = localStorage.getItem('lang') || 'ru';
    $translateProvider.preferredLanguage(language);
    $translateProvider.useSanitizeValueStrategy('escape');

}