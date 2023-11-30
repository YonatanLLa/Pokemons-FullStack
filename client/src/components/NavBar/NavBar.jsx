import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Seeker from "../Seeker/Seeker";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      <div className={`${styles.childrenNav} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul>
          <li className={currentPage === "home" ? styles.ancon : ""}>
            <Link
              to="/home"
              className={styles.decoracion}
              onClick={() => handlePageChange("home")}
            >
              Inicio
            </Link>
          </li>
        </ul>

        <ul>
          <li className={currentPage === "create" ? styles.ancon : ""}>
            <Link
              to="/create"
              className={styles.decoracion}
              onClick={() => handlePageChange("create")}
            >
              Crear Prokemon
            </Link>
          </li>
        </ul>

        <ul>
          <li className={currentPage === "regresar" ? styles.ancon : ""}>
            <Link
              to="/"
              className={styles.decoracion}
              onClick={() => handlePageChange("regresar")}
            >
              Regresar
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.inputNav}>
        <ul>
          <li>
            <Seeker />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
