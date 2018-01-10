import React from 'react';
//====Componenet=================================
import SpinningWheel from './SpinningWheel';

const Video = (props) => {
  if (!props.video) {
    return (
      <div>
        <SpinningWheel type='spin' color='black'/>
        Loading..
      </div>
    );
  } else {
    const video = props.video;
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    return (
      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item'
            src={url}
          />
        </div>
        <div className='details'>
          <div className='title'>{video.snippet.title}</div>
          <div className='description'>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default Video;
