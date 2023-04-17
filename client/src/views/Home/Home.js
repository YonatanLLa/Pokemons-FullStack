import React from "react";
import Cards from "../../components/Cards/Cards";
// import Card from '../../components/Card/Card'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "../../redux/action";
import Filter from "../../components/Filter/Filter";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeFilter}>
        <Filter />
      </div>
      <div className={styles.homeCards}>
        <Cards />
      </div>
      <div className={styles.homeFooter}>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
