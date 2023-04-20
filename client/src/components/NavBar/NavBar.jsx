import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Seeker from "../Seeker/Seeker";
const NavBar = () => {
  return (
    
      <nav className={styles.navContainer}>
    <div className={styles.childrenNav}>
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
    </div>
    <div className={styles.inputNav}>
        <ul>
          <li>
            <Seeker/>
          </li>
        </ul>
      </div>
    </nav>
     

     );
};

export default NavBar;
