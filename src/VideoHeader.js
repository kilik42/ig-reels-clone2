import React from 'react'

import './VideoHeader.css'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { CameraAltOutlinedIcon } from '@material-ui/icons';
function VideoHeader() {
  return (
    <div className="videoHeader">
        <ArrowBackIosIcon />

        <CameraAltOutlinedIcon />
    </div>
  )
}

export default VideoHeader