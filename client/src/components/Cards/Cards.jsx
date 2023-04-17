import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"
import { useSelector } from 'react-redux'


// Renderiza un componete card
const Cards = () => {
 const pokemons = useSelector(state => state.pokemons)
  return (
    // redeniza un componente
    <div className={styles.cardsContainer}>
      {pokemons.map(
        ({id, name, image, Types, attack}) => {
          return (
            <>
              <Card
                id={id}
                name={name}
                image={image}
                type={Types}
                attack={attack}
              />
            </>
          );
        }
      )}
    </div>
  );
};

export default Cards;
