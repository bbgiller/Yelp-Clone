import React from 'react';
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.businesses
    }
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        // debugger
        let businesses = this.state.map(business => (
            <BusinessIndexItem
              business={business}
              key={business.id}
            />))
        return (
            {businesses}
        )
    }
}

export default BusinessIndex;