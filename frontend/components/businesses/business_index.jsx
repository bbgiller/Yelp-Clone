import React from 'react';
import BusinessIndexItem from './business_index_item'

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
            <div>{bus}</div>
        )
    }
}

export default BusinessIndex;