/* @ngInject */
export default ($httpProvider) => {
    $httpProvider.interceptors.push('httpErrorService');
}
