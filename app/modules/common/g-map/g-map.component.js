import './g-map.styl'

let $this;
class Controller {

    /*@ngInject*/
    constructor($element, $rootScope, gMapService) {
        this.$element = $element;
        this.$rootScope = $rootScope;
        this.gMapService = gMapService;
    }

    $onInit() {
        $this = this;
        this.markers = [];
        this.gMapService.createMap(this.$element[0].childNodes[0]);
        this.$rootScope.$on('locations_loaded', this.makeMarkers);
    }

    makeMarkers(event, locations) {
        $this.gMapService.clear();
        $this.markers = [];
        $this.gMapService.createMap($this.$element[0].childNodes[0]);
        locations.forEach((location, index) => {
            $this.gMapService.getPoint(location.address, index)
            .then($this.gMapService.addMarker)
            .then($this.gMapService.renderMarker)
            .catch(status => {
                if (status === 'INVALID_REQUEST') {
                    //console.log('Invalid address!');
                }
            })
        })
    }

}

const component = {
    bindings: {},
    template: "<div id='gmap' class='block'></div>",
    controller: Controller
};

export default component;