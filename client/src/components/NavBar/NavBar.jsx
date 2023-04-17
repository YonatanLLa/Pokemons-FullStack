import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/create">Form</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Regresar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
