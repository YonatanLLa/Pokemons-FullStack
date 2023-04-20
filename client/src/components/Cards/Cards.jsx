import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"
// import { useSelector } from 'react-redux'


// Renderiza un componete card
const Cards = ({pokemons}) => {
//  const pokemons = useSelector(state => state.pokemons)
  return (
    // redeniza un componente
    <div className={styles.cardsContainer}>
      {
      
         pokemons?(pokemons.map(
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
        )):(
          <p>Cargando.......</p>
        )
      }
     
      
    </div>
  );
};

export default Cards;
