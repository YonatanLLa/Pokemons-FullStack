import styles from "./Paginado.module.css"
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
      
        {
          pageNumbers.length?(

            pageNumbers && pageNumbers.map(page => (
              <div>
                  <button type="button" onClick={(event) => handleClick(page, event)}>{page}</button>
              </div>
            ))
          ):<>
            <div className={styles.notFoundPaginado}>
                {/* <Refresh/> */}
                <h1>We don't have results here yet</h1>
                <svg style={{fill: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"></path></svg>
                {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style={{color: "white"}} d="M22 15H19V3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15ZM16.7071 16.2929L10.3066 22.6934C10.1307 22.8693 9.85214 22.8891 9.65308 22.7398L8.8005 22.1004C8.3158 21.7369 8.09739 21.1174 8.24686 20.5303L9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H16C16.5523 3 17 3.44772 17 4V15.5858C17 15.851 16.8946 16.1054 16.7071 16.2929Z"></path></svg> */}
              </div>
          </>
          
        }
    </footer>
  )
}

export default Paginado