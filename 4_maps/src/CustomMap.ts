// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable{
    location: {
        lat: number;
        lng: number;
    };
    colour: string;
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map; //Encapsulating the map to make sure other engineers cant get at the methods.

    constructor(mapDiv: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapDiv), { 
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}