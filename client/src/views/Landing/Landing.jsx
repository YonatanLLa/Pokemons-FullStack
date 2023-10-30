// import { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./Landing.module.css";
import pokebola from "../../assets/pokebola.png";
// import { getPokemons } from "../../redux/action";
// import { useDispatch } from "react-redux";

const Landing = () => {
//   const dispatch = useDispatch();
  const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getPokemons());
//   }, [dispatch]);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.containerLanding}>
      <div className={styles.landingImage}>
        <h1 className={styles.titleLanding}>Pokemon</h1>
      </div>

      <div className={styles.childrenLanding}>
        <h2 className={styles.subtitleLanding}>
          No hay nada más fuerte que una <br /> amistad forjada en batalla...
        </h2>
      </div>
      <img
        src={pokebola}
        alt=""
        style={{ position: "absolute", left: "30rem", top: "12rem" }}
      />
      <div className={styles.buttonDivLanding}>
        <button className={styles.buttonLanding} onClick={handleClick}>
          INGRESAR
        </button>
      </div>
    </div>
  );
};

export default Landing;
