import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Seeker from "../Seeker/Seeker";
const NavBar = () => {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul>
          <li>
            <Seeker/>
          </li>
        </ul>
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
     
    </div>
  );
};

export default NavBar;
