import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../Cards/Cards.jsx';

const   Paginado = () => {

  const pokemons = useSelector(state => state.pokemons);
  const [currentPage, setCurrentPage] = useState(0);

  const pokemonsPerPage = 12;
  const startIndex = currentPage * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  const currentPokemons = pokemons.slice(startIndex, endIndex);

  console.log(currentPokemons);
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {/* Renderizar los pokemons actuales en la página */}
      {/* Botones para cambiar de página */}
      <div className="pagination">
        <Cards currentPokemons = {currentPokemons}/>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= pokemons.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginado;