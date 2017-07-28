import StorageService from './storage.service'
let $this;

class GMapService extends StorageService {

    /* @ngInject */
    constructor() {
        super('addresses');
        this.geocoder = new google.maps.Geocoder();
        this.bounds = new google.maps.LatLngBounds();
        this.map = null;
        this.markers = [];
        this.init();
    }

    init() {
        $this = this;
    }

    clear() {
        this.map = null
    }

    createMap(element) {
        this.map = new google.maps.Map(element, {
            center: {lat: 55.751244, lng: 37.618423},
            zoom: 10
        });
    }
    getPoint(address, index) {
        return new Promise((resolve, reject) => {
            let point = $this.read(address); // read point from localStorage
            if (point) {
                resolve(point)
            } else {
                // get point from api
                setTimeout(() => {
                    $this.geocoder.geocode({'address': address}, (results, status) => {
                        if (status === 'OK') {
                            point = {
                                address: results[0].formatted_address,
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                            $this.save(point); // save point to localStorage
                            resolve(point);
                        } else {
                            reject(status);
                        }
                    });
                }, index * 100); // hack queries limit to api
            }
        });
    }
    addInfoWindow(marker, text) {
        marker.infoWindow = new google.maps.InfoWindow({content: text});
        marker.addListener('click', () => {
            marker.infoWindow.open($this.map, marker)
        })
    }
    addMarker(point) {
        let marker = new google.maps.Marker({
            position: {lat: point.lat, lng: point.lng},
            animation: google.maps.Animation.DROP
        });
        $this.addInfoWindow(marker, point.address);
        $this.addMarkerToArr(marker);
        return marker;
    }
    renderMarker(marker) {
        marker.setMap($this.map);
        return marker;
    }
    addMarkerToArr(marker) {
        this.markers.push(marker);
        $this.boundsFocus();
    }
    boundsFocus() {
        for (var i = 0; i < this.markers.length; i++) {
            this.bounds.extend(this.markers[i].getPosition());
        }
        this.map.fitBounds(this.bounds);
    }

}

export default GMapService