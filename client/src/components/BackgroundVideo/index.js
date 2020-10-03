import React from 'react';
import classes from "../BackgroundVideo/style.css";
import DaGoods from "../BackgroundVideo/backgroundVideo.mp4"

const BackgroundVideo = () => {
    const videoSource = DaGoods;
    return (
        <div className={classes.Container} > 
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoSource} type="video/mp4" />
                Browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo;