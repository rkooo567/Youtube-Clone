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
    return (
      <div>
        <input
          type="text"
          placeholder="Search videos"
          value={this.state.query}
          onChange={(event) => this.onInputChange(event)}
          onKeyPress={
            event => {
              if (event.key === 'Enter'){
                this.props.onSearchResult(this.state.query)
              }
            }
          }
        />
        <button
          onClick={() => {this.props.onSearchResult(this.state.query)}}
        >
          Search
        </button>
      </div>
    );
  }
};

export default SearchBar;
