import React from 'react'
import { useNavigate } from 'react-router'
import LanVideo from './LanVideo/LanVideo'
import styles from "./Landing.module.css"
// import Carrusel from "../../components/Carrusel/Carrusel"
const Landing = () => {
  const navigate = useNavigate()
  console.log(navigate);
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div className={styles.containerLanding}>
      <h1 className={styles.titleLanding}>Pokemon</h1>
      <div className={styles.videoLanding}>
      <LanVideo/>
      </div>
      <div className={styles.buttonDivLanding} >
      <button className={styles.buttonLanding} onClick={handleClick}>INGRESAR</button>

      </div>
      {/* <Carrusel/> */}
    </div>
  )
}

export default Landing
