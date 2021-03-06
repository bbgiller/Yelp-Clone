import React from 'react';
import {Link} from 'react-router-dom'

const BusinessIndexItem = (props) => (
    <div className="business-index-item-box">
    <Link to={`/businesses/${props.business.id}` } className="business-index-item-photo" ><img src={props.business.photoUrls ? props.business.photoUrls[0] : null} className="img-index"/></Link>
    <Link to={`/businesses/${props.business.id}` } className="business-index-item-name" >{props.business.name}</Link>
    <div className="business-index-item-address">{props.business.address}</div>
    {/* <div className="business-index-item-address">{props.business.ph}</div> */}

    
    {/* <p>Latitude:{props.business.latitude}</p> */}
    {/* <p>Longitude:{props.business.longitude}</p> */}
    </div>
)

export default BusinessIndexItem;
