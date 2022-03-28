import React from 'react'
import './VideoFooter.css'
import {Button, Avatar} from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from 'react-ticker';
function VideoFooter({channel, song , likes, shares, avatarSrc}) {
  return (
    <div className="videoFooter">
        <div className="videoFooter__text">
                <Avatar src={avatarSrc}/>
                <h3>
                    {channel}. <Button>Follow</Button>
                </h3>
        </div>
        <div className="videoFooter__ticker">
           <MusicNoteIcon className="videoFooter__icon"/>
           <Ticker mode ="smooth">
               {
                   ({index})=> (
                       
                       <>
                       <h1>{song}</h1>
                       </>
                   )
               }
           </Ticker>
        </div>

      
    </div>
  )
}

export default VideoFooter
