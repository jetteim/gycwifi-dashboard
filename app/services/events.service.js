export default class EventsService {

    /* @ngInject */
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    image(imageName) {
        // Properties
        var name = imageName;
        let $rootScope = this.$rootScope;

        // Public methods
        return {
            loadEnd: function(url){
                $rootScope.$broadcast('image_loaded', {entity: name, url: url});
            },
            loadStart: function() {
                $rootScope.$broadcast('image_load_start', name);
            },
            loadError: function() {
                $rootScope.$broadcast('image_load_error', name);
            }
        }
    }

}