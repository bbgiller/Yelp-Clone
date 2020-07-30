import React from 'react';
import MarkerManager from '../../util/marker_manager';
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
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses)
        // debugger
      }
      componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses)
      }
    
      render() {
        return (
          // ...
          <div className="map-container" ref='map' >
            <div ref={ map => this.mapNode = map }> 
        
          </div>
          </div>
        )
      }

        
}

export default BusinessMap;