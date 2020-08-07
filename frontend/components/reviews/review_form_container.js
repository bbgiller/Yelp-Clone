import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import {fetchBusiness} from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
    debugger
    return(
        {
            business: state.entities.businesses[ownProps.match.params.businessId] || {},
            // currentUser: state.entities.users[state.session.id]

        }
    )

}

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);