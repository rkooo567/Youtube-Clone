import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

//======== Components===================
import SearchBar from './Search';
import VideoList from './VideoList';
import Video     from './Video';

const YOUTUBE_API_KEY = 'AIzaSyBiHAaACxX7NmiCk0JnDw-YZlbtr9C4E40';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    // fetch Youtube data initially
    YTSearch({
      key: YOUTUBE_API_KEY,
      term: 'pogba'
    }, (fetched_videos) => {
      this.setState({
        videos: fetched_videos,
        selectedVideo: fetched_videos[0]
      });
    });
  }

  videoSearch(query) {
    YTSearch({
      key: YOUTUBE_API_KEY,
      term: query
    }, (fetched_videos) => {
      this.setState({
        videos: fetched_videos,
        selectedVideo: fetched_videos[0]
      });
    });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <SearchBar
            onSearchResult={(query) => this.videoSearch(query)}
          />
        </div>
        <div>
          <Video video={this.state.selectedVideo} />
        </div>
        <div>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={
              selectedVideo => this.setState({selectedVideo: selectedVideo})
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
