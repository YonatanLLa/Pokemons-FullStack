import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/action';
import Cards from '../Cards/Cards';
import styles from "./Paginado.module.css"

const Paginado = () => {
  const allPokemons = useSelector(state => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const count = 12;

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(allPokemons.length / count);

  // Crea un array con el número de páginas
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calcula los índices de los pokemones que se deben mostrar en la página actual
  const startIndex = (currentPage - 1) * count;
  const endIndex = currentPage * count;

  // Obtiene los pokemones que se deben mostrar en la página actual
  const paginatedPokemons = allPokemons.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  const handlePageClick = e => {
    const pageNumber = Number(e.target.dataset.pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <div>
          <Cards pokemons={paginatedPokemons} />
        </div>
        <div className={styles.buttonContainerPaginado}>

          <button onClick={handlePreviousPage}>Anterior</button>
          {pagesArray.map(pageNumber => (
            <button
            key={pageNumber}
            data-page-number={pageNumber}
            onClick={handlePageClick}
            disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
        {/* <Footer> */}
        {/* </Footer> */}
      </div>
    </>
  );
};

export default Paginado;