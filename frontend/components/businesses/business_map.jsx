import React from 'react';
class BusinessMap extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 }, // this is SF
          zoom: 13
        };
    
        
        this.map = new google.maps.Map(this.refs.map, mapOptions);
        // debugger
      }
    
      render() {
        return (
          // ...
          <div id="map-container" ref='map' >
            <div ref={ map => this.mapNode = map }> 
        
          </div>
          </div>
        )
      }

        
}

export default BusinessMap;