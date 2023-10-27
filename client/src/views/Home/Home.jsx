import React from "react";

import Filter from "../../components/Filter/Filter";
import styles from "./Home.module.css";

import Silebar from "../../components/AboutRedes/Silebar";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeNavD1}>
        <Silebar />
      </div>
      <div className={styles.homeCardsD2}>
        <Cards />
      </div>
      <div className={styles.homeFilterD3}>
        <Filter />
      </div>
    </div>
  );
};

export default Home;
