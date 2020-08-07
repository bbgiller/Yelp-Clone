import React from 'react';
import {Link} from 'react-router-dom'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body: ''
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      body: this.state.body,
      rating: this.state.rating,
      business_id: parseInt(this.props.match.params.businessId)
        }
    }

    render() {

        return(
            <div>

            <div className="session-header">
            <Link to="/">Yalp</Link>

            </div>

            <div className="review-business-name">
                <h1>{this.props.business.name}</h1>
            </div>


       =
            <div>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="review-form-rating" ></div>
                        <input className="rating1" type="radio" name="rating" value="1" checked={this.state.rating ===1} onChange={this.update("rating")}/>
                        <label htmlFor="rating1">1</label>
                        <input className="rating2" type="radio" name="rating" value="2" checked={this.state.rating === 2} onChange={this.update("rating")} />
                        <label htmlFor="rating2">2</label>
                        <input className="rating3" type="radio" name="rating" value="3" checked={this.state.rating === 3} onChange={this.update("rating")} />
                        <label htmlFor="rating3">3</label>
                        <input className="rating4" type="radio" name="rating" value="4" checked={this.state.rating === 4} onChange={this.update("rating")} />
                        <label htmlFor="rating4">4</label>
                        <input className="rating5" type="radio" name="rating" value="5" checked={this.state.rating ===5} onChange={this.update("rating")}/>
                        <label htmlFor="rating5">5</label>
                    

                    <textarea className="review-form-body"
                        value={this.state.body}
                        onChange={this.update('body')}
                    ></textarea>

                <input type="submit" className="review-form-submit"/>





                </form>

            </div>

            </div>
        )
    }
    



}

export default ReviewForm;