import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader';

function VideoCard() {
//usestate hook to keep track of the video card's state
const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//ref to the video element its a pointer to the video element
const videoRef = useRef(null);
const onVideoPress = () => {

// 1:01:53


  if (isVideoPlaying) {
    //stop the video
    videoRef.current.pause();
    setIsVideoPlaying(false);
  
  }else{
    //play the video
    videoRef.current.play();
    setIsVideoPlaying(true);
  }
}
  return (
    <div className="videoCard">
      <VideoHeader />
      <video 
      ref={videoRef}
      onClick={onVideoPress}
      className="video__player"
      src='https://player.vimeo.com/external/519943720.sd.mp4?s=d9609b546c57dac56dd27752dc62c9a003556042&profile_id=165&oauth2_token_id=57447761'
      alt='IG reel video'
      loop ={true}
      />
      

    </div>
  )
}

export default VideoCard
