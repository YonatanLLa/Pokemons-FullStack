import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"
import { useSelector } from 'react-redux'


// Renderiza un componete card
const Cards = (props) => {
  console.log(props.currentPokemons);
  // console.log(currentPokemons);
 const pokemons = useSelector(state => state.pokemons)
  return (
    // redeniza un componente
    <div className={styles.cardsContainer}>
      {pokemons.map(
        ({id, name, image, Types, attack}) => {
          return (
            <div className={styles.cardsChildren}>
              <Card
                id={id}
                name={name}
                image={image}
                type={Types}
                attack={attack}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;
