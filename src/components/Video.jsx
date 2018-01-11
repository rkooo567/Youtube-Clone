import React from 'react';
//====Componenet=================================
import SpinningWheel from './SpinningWheel';
import { Panel } from 'react-bootstrap';

const Video = (props) => {
  if (!props.video) {
    return (
      <div className='spinning-wheel'>
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
        <Panel className='details'>
          <Panel.Heading>
            {video.snippet.title}
          </Panel.Heading>
          <Panel.Body>{video.snippet.description}</Panel.Body>
        </Panel>
      </div>
    );
  }
};

export default Video;
