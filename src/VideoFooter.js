import React from 'react'
import './VideoFooter.css'
import {Button, Avatar} from "@material-ui/core";
function VideoFooter({channel, song , likes, shares, avatarSrc}) {
  return (
    <div className="videoFooter">
        <div className="videoFooter__text">
                <Avatar src={avatarSrc}/>
                <h3>
                    {channel}. <Button>Follow</Button>
                </h3>
        </div>
     

      <Button />
    </div>
  )
}

export default VideoFooter
