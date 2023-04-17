import React from 'react'
import { useNavigate } from 'react-router'
import LanVideo from './LanVideo/LanVideo'
import styles from "./Landing.module.css"

const Landing = () => {
  const navigate = useNavigate()

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
    </div>
  )
}

export default Landing
