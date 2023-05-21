import styles from "./Paginado.module.css"
import NotFound from "../NotFound/NotFound"


const Paginado = ({pokemons, paginado, countPage }) => {

  const totalPages = pokemons?Math.ceil(pokemons.length/countPage):0
  const pageNumbers = Array.from({length: totalPages}, (_,i)=> i + 1)
  const handleClick = (page, event) => {
    event.preventDefault(); 
    paginado(page);
  }

console.log(pageNumbers);

  return (
    <footer>
      <div style={{display: "flex"}} >
        <button> hola </button>        
          {            
            pageNumbers.length?(
              <div className={styles.buttonPaginado}>
                {    
                pageNumbers && pageNumbers.map(page => (
                <div>
                    <button type="button" onClick={(event) => handleClick(page, event)}>{page}</button>
                </div>
              ))
                }

              </div>

            ):<>
              <NotFound />
            </>
            
          }
          <button>final</button>
      </div>
    </footer>
  )
}

export default Paginado