import React from 'react';


const BusinessIndexItem = (props) => (
    <div>
    <h1>{props.business.name}</h1>
    <p>{props.business.address}</p>
    <p>Latitude:{props.business.latitude}</p>
    <p>Longitude:{props.business.longitude}</p>
    </div>
)

export default BusinessIndexItem;
