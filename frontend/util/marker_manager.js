

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        let businessObject = {};
        businesses.forEach(business => businessObject[business.id] = business);
        let markerKeys = Object.keys(this.markers);
        markerKeys.slice();
        Object.keys(this.markers).forEach(businessId => {
          if (!businessObject[businessId]){
            let noMarker = this.markers[businessId];
            if(noMarker){
              this.removeMarker(noMarker);
              delete this.markers[businessId];
            }
          }
        })
    
        businesses.forEach(business => {
          this.createMarkerForBusiness(business);
        })
    
        Object.keys(this.markers).forEach((markerId, idx) => {
          let marker = this.markers[markerId];
          let markerNum = idx + 1;
          markerNum = markerNum.toString();
          if(Object.keys(this.markers).length > 1){
            marker.setLabel(markerNum);
          }
        })
    }

    createMarkerForBusiness(business) {
        if(!this.markers[business.id]){
          let latLng = { lat: business.latitude, lng: business.longitude }
          let marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            businessId: business.id
          })
    
          let markerName =  `<p>${business.name}</p>`
    
          const info = new google.maps.InfoWindow({
            content: markerName
          });
    
          marker.addListener('click', () => {
            info.open(this.map, marker);
          })
    
          marker.addListener('mouseout', () => {
            info.close(this.map, marker)
          })
    
          this.markers[business.id] = marker;
        }
      }
    
        removeMarker(marker){
          marker.setMap(null);
        }
    




}