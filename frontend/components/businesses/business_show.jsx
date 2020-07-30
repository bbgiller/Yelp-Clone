import React from 'react';
import BusinessMap from './business_map';
import HeaderContainer from '../header/header_container'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.business
    }

    componentDidMount() {
        // debugger
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render() {
        // debugger
        if (!this.props.business) {
            return null;
        }
        const weekdays = ['Mon', 'Tue', 'Wed', 'Thu','Fri'];
        
        return(
        <div>
            <div className="show-header">
                {<HeaderContainer/>}
            </div>

            <div className="show-pictures">
                {/* <h1>Pictures go here</h1> */}
            </div>

            <div className="show-head">
                <h1 className="show-business-name">{this.props.business.name}</h1>
                <h2 className="show-business-category">{this.props.business.category}</h2>
            </div>
            
            <div className="show-side-information-container">
                <div className="show-side-information">
                    <a href={`${this.props.business.website}`} className="show-business-website"><p className="website-icon">↳</p> {this.props.business.website}</a>
                    <p className="show-business-phonenumber"><p className="phone-icon" >✆</p> {this.props.business.phone_number}</p>
                </div>
            </div>

            <div className="map-hours-container">

                <div className="hours-container">
                    <ul className="hours">
                        
                        <li>Mon {this.props.business.weekday_hours}</li>
                        <li>Tue {this.props.business.weekday_hours}</li>
                        <li>Wed {this.props.business.weekday_hours}</li>
                        <li>Thu {this.props.business.weekday_hours}</li>
                        <li>Fri {this.props.business.weekday_hours}</li>
                        <li>Sat {this.props.business.weekend_hours}</li>
                        <li>Sun {this.props.business.weekend_hours}</li>
                    
                    </ul>
                </div>

                <div className="show-map" >
                    <h2>Location & Hours</h2>
                    {<BusinessMap businesses={[this.props.business]}/>}
                </div>

                <div className="show-address">
                    {this.props.business.address}
                </div>

            </div>

           

            


        </div>
        )
    }
}

export default BusinessShow;