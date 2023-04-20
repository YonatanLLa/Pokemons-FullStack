import React, { useState } from "react";
// import Cards from "../../components/Cards/Cards";
// import Card from '../../components/Card/Card'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTypes } from "../../redux/action";
import Filter from "../../components/Filter/Filter";
import styles from "./Home.module.css";
import Paginado from "../../components/Paginado/Paginado";
// import Footer from "../../components/Footer/Footer";
import Silebar from "../../components/About/Silebar";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  
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
        <Paginado/>
      </div>
      <div className={styles.homeFilterD3}>
        <Filter />
      </div>
  
    </div>
  );
};

export default Home;
