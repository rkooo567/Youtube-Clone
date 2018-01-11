import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  onInputChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const videoSearch = this.props.onSearchResult;
    return (
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search videos"
          value={this.state.query}
          // change the state query whenever the user types something
          onChange={(event) => this.onInputChange(event)}
          onKeyPress={
            event => {
              if (event.key === 'Enter'){
                videoSearch(this.state.query)
              }
            }
          }
        />
        <button
          onClick={() => {videoSearch(this.state.query)}}
        >
          Search
        </button>
      </div>
    );
  }
};

export default SearchBar;
