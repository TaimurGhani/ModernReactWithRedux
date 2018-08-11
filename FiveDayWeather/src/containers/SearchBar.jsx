import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
       term: ''
    }
  }
  
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          type="text"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-day forcase in your favorite cities"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchWeather }, dispatch)
);

export default connect(null, mapDispatchToProps)(SearchBar);
