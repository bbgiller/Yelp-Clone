import React from 'react';
import BusinessIndexItem from './business_index_item'
import BusinessMap from './business_map';
import HeaderContainer from '../header/header_container'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        // this.state = this.props.businesses
    }
    componentDidMount() {
        // debugger
        this.props.fetchBusinesses();
    }

    render() {
        

        let bus = this.props.businesses.map(business => (
            <BusinessIndexItem
              business={business}
              key={business.id}
            />))
        return (
            <div>
            <div className="show-header" >
                {<HeaderContainer/>}
            </div>
            <div className="business-index-item">{bus}</div>
        <div className="business-index-map">{<BusinessMap />}</div>
        </div>
        )
    }
}

export default BusinessIndex;