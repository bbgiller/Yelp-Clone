import React from 'react';
import BusinessMap from './business_map';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.business
    }

    // componentDidMount() {
    //     this.props.fetchBusiness(this.props.match.params.businessId)
    // }

    render() {
        debugger
        return(
        <h1>{this.props.business.name}</h1>
        )
    }
}

export default BusinessShow;