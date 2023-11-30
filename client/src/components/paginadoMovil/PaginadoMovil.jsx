import React from "react";
import styles from "./PaginadoMovil.module.css";

const PaginadoMovil = ({ paginado, countPage, currentPage }) => {
  const totalPages = 10; // Define el número total de páginas según tu lógica

  const handleClick = (page, event) => {
    event.preventDefault();
    paginado(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      paginado(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginado(currentPage + 1);
    }
  };

  return (
    <footer>
      <div className={styles.pagination}>
        <button
          className={`${styles.buttonPrev} ${currentPage > 1 ? "" : styles.disabled}`}
          onClick={handlePrev}
        >
          Prev
        </button>

        <div className={styles.currentPage}>
          <span>{currentPage}</span>
        </div>

        <button
          className={`${styles.buttonNext} ${currentPage < totalPages ? "" : styles.disabled}`}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default PaginadoMovil;