import React, { useEffect, useRef } from "react";
import video from "../../../assets/videos/Batalla.mp4";
import styles from "./LanVideo.module.css";

const LanVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Establece el tiempo de inicio del segmento en 30 segundos después de que se cargue el video
      videoRef.current.currentTime = 60 // establece el tiempo actual en 60 segundos (1 minuto)
      videoRef.current.startTime = 60 // establece el tiempo de inicio en 60 segundos (1 minuto)
      videoRef.current.endTime = 120 // establece el tiempo de finalización en 120 segundos (2 minutos)
      // videoRef.current.play()
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
