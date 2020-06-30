import React from 'react';
import BusinessMap from './business_map';
import Header from '../header/header'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.business
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render() {
        // debugger
        const weekdays = ['Mon', 'Tue', 'Wed', 'Thu','Fri'];
        
        return(
        <div>
            <div className="show-header">
                {<Header/>}
            </div>

            <div className="show-pictures">
                <h1>Pictures go here</h1>
            </div>

            <div className="show-head">
                <h1 className="show-business-name">{this.props.business.name}</h1>
                <h2 className="show-business-category">{this.props.business.category}</h2>
            </div>
            
            <div className="show-side-information-container">
                <div className="show-side-information">
                    <a href={`${this.props.business.website}`} className="show-business-website">{this.props.business.website}</a>
                    <p className="show-business-phonenumber">{this.props.business.phone_number}</p>
                </div>
            </div>

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
                <h2>Location</h2>
                {<BusinessMap/>}
            </div>

           

            


        </div>
        )
    }
}

export default BusinessShow;