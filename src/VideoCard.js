import React from 'react'
import './VideoCard.css'

function VideoCard() {
  return (
    <div className="videoCard">
      <video 
      className="video__player"
      src='https://player.vimeo.com/external/519943720.sd.mp4?s=d9609b546c57dac56dd27752dc62c9a003556042&profile_id=165&oauth2_token_id=57447761'
      alt='IG reel video'
      loop ={true}
      />
      

    </div>
  )
}

export default VideoCard
