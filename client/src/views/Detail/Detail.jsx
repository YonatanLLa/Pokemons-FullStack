import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import styles from "./Detail.module.css"

const Detail = () => {
  const obj = 
    {
    "name": "yonatan",
    "id": "44f3c8e5-55ca-452f-9c76-d9ae6c953b49",
    "hp": 10,
    "attack": 49,
    "defense": 45,
    "speed": 49,
    "height": 7,
    "weight": 69,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    "created": false,
    "Types": [
    "flying",
    "fire"
    ]
    }
  const {id} = useParams()
  const pokemons = useSelector(state => state.pokemons)
  const { name,hp, attack, defense, speed, weight, height,image } = obj
        // pokemons.find((poke) => `${poke.id}` === `${id}`);
  return (
    <>
    <div className={styles.containerDetail}>
      <div className={styles.descriptionDetail}>
        <h3>Name: {name}</h3>
        <h3>Hp: {hp}</h3>
        <h3>Attack: {attack}</h3>
        <h3>Defense: {defense}</h3>
        <h3>Speed: {speed}</h3>
        <h3>Weight: {weight}</h3>
        <h3>Height: {height}</h3>
      </div>

      <Link to="/home">
      <button>Regresar</button>
      </Link>
    </div>
      <img src={image} alt="" className={styles.imageDetail} />
    </>
  )
}

export default Detail
