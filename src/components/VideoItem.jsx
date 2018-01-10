import React from 'react';

const VideoItem = (props) => {
  const video = props.video;
  const onVideoClick = props.onVideoClick;
  const title = video.snippet.title;
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li className='list-group-item' onClick={() => onVideoClick(video)}>
      <div className='video-list media'>
        <div className='media-left'>
          <img
            className='media-object'
            src={imageURL}
            art='video-picture'
          />
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
