import React, { useState } from "react";
// import Cards from "../../components/Cards/Cards";
// import Card from '../../components/Card/Card'
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import styles from "./Home.module.css";
// import Paginado from "../../components/Paginado/Paginado";
// import Footer from "../../components/Footer/Footer";
import Silebar from "../../components/AboutRedes/Silebar";
import Cards from "../../components/Cards/Cards";
// import {getPokemons} from "../../redux/action"
const Home = () => {
  // const dispatch = useDispatch();
  

  // const dispatch = useDispatch()
  // console.log(pokemons);
  // useEffect(() => {
  // }, [dispatch]);
  return (
    <div className={styles.homeContainer}>
      {/* <div className={styles.cursorHome}>
      <Cursor/>
      </div> */}
      <div className={styles.homeNavD1}>
        <Silebar/>
      </div>
      <div className={styles.homeCardsD2}>
        {/* <Cards /> */}
        <Cards/>
      </div>
      <div className={styles.homeFilterD3}>
        <Filter />
      </div>
    
    </div>
  );
};

export default Home;
