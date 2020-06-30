import React from 'react';
import {Link} from 'react-router-dom'

const BusinessIndexItem = (props) => (
    <div>
    <Link to={`/businesses/${props.business.id}`} >{props.business.name}</Link>
    <p>{props.business.address}</p>
    <p>Latitude:{props.business.latitude}</p>
    <p>Longitude:{props.business.longitude}</p>
    </div>
)

export default BusinessIndexItem;
