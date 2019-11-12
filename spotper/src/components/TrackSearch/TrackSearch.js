import React, { Component } from 'react';
import './TrackSearch.css';

class TrackSearch extends Component {

	state = {
	  searchTerm: ''
	};

	updateSearchTerm = (e) => {
	  this.setState({
	    searchTerm: e.target.value
	  });
	}

	render() {
	  return(
	    <div className='track-search-container'>
	      <form onSubmit={() => { this.props.searchSongs(this.state.searchTerm, this.props.token);}}>
	        <input onChange={this.updateSearchTerm} type='text' placeholder='Search...' />
	        <button onClick={(e) => {e.preventDefault()}}>
	          <i className="fa fa-search search" aria-hidden="true"/>
	        </button>
	      </form>
	    </div>
	  );
	}
}

export default TrackSearch;