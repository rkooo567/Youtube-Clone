import React, { Component } from 'react';
import VideoItem            from './VideoItem';

class VideoList extends Component {
  render() {
    const videoItems = this.props.videos.map(
      (video) => {
        return (
          <VideoItem
            onVideoClick={selectedVideo => this.props.onVideoSelect(selectedVideo)}
            key={video.etag}
            video={video}
          />
        );
      }); // For the key, use the unique ID.

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
};

export default VideoList;
