import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
// mostrar los pokemons
const Card = ({name,image,type, id, attack}) => {
  console.log({name,image,type,id});
  //  muestra la info de los pokemones
  // - link para los detalles
  return (
    <div className={styles.cardContainer}>
            <Link to={`/detail/${id}`}>
      <img className={styles.cardImg} src={image} alt="" />
      </Link>
      <div className={styles.cardDetails}>
        <h1 className={styles.cardTitle}>name: {name}</h1>
      {
        type.map(tipo => {
          return (
            <div className={styles.cardType}>
              <h3>type: {tipo}</h3>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Card
