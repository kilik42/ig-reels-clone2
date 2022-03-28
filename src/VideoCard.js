import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function VideoCard({url, likes, shares, channel, avatarSrc, song}) {
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
      src={url}
      alt='IG reel video'
      loop ={true}
      />
      
      <VideoFooter 
      channel ={channel}
      avatarScr = {avatarSrc}
      song = {song}
      
      likes ={likes}
      shares ={shares}
      />
    </div>
  )
}

export default VideoCard
