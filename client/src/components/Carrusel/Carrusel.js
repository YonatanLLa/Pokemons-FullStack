import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Carrusel.module.css"

const Carrusel = () => {
  const pokemons = useSelector(state => state.pokemons);
  const imgenPoke = pokemons.map((poke) => poke.image);
  console.log(imgenPoke);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % imgenPoke.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [imgenPoke.length]);

  return (
    <div>
      <img src={imgenPoke[currentIndex]} alt="Pokemon" className={styles.imgCarrusel}/>
    </div>
  );
};

export default Carrusel;
