import React, { useEffect, useRef } from "react";
import video from "../../../assets/videos/Batalla.mp4";
import styles from "./LanVideo.module.css";

const LanVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      
      videoRef.current.playbackRate = 1;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <video src={video} ref={videoRef} autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default LanVideo;
