import React, {useRef, useEffect} from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
// mostrar los pokemons

const Card = ({name,image,type, id}) => {
  
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.cardTitle} style={{textAlign: "center"} }>{name}</h1>
            <Link to={`/detail/${id}`}>
      <img className={styles.cardImg} src={image} alt="" />
      </Link>
      <div className={styles.cardDetails}>
      {
        type.map(tipo => {
          return (
            <div className={` ${styles.cardType}  ${tipo}`} style={{backgroundColor: "transparent"}}>
              {/* <h3>type: {}</h3> */}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Card
