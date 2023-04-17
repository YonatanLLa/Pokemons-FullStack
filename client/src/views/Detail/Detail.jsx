import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
const Detail = () => {
  const {id} = useParams()
  const pokemons = useSelector(state => state.pokemons)
  console.log(pokemons);
  const { name,hp, attack, defense, speed, weight, height,image } =
        pokemons.find((poke) => `${poke.id}` === `${id}`);
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Hp: {hp}</h3>
      <h3>Attack: {attack}</h3>
      <h3>Defense: {defense}</h3>
      <h3>Speed: {speed}</h3>
      <h3>Weight: {weight}</h3>
      <h3>Height: {height}</h3>
      <img src={image} alt="" />
      <Link to="/home">
      <button>Regresar</button>
      </Link>
    </div>
  )
}

export default Detail
