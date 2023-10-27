import Filter from "../Filter/Filter";
import Seeker from "../Seeker/Seeker";
import styles from "./Paginado.module.css";
// import NotFound from "../NotFound/NotFound";

const Paginado = ({ pokemons, paginado, countPage, currentPage }) => {
	<Filter paginado={paginado}/>
	const totalPages = pokemons ? Math.ceil(pokemons.length / countPage) : 0;
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	const handleClick = (page, event) => {
		event.preventDefault();
		paginado(page);
	};

	const handlePrev = (currentPage) => {
		if (currentPage !== 1) {
			paginado(currentPage - 1);
		}
	};
	const handleNext = (currentPage) => {
		if (currentPage < totalPages) {
			paginado(currentPage + 1);
		}
	};


	return (
		<footer>
				{/* <Seeker paginado={paginado}/> */}

			<div
				style={{
					display: "flex",
					marginTop: "5rem",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{
					// pokemons.length?
					<>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								gap: "5px",
							}}
						>
							{/* izquierda */}
							<button
								className={`${
									currentPage !== 1 ? styles.prev : styles.prevNot
								} ${styles.buttonPrev}`}
								onClick={() => handlePrev(currentPage)}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<svg
										className={styles.svgNextPrev}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path d="M4.83594 12.0001L11.043 18.2072L12.4573 16.793L7.66436 12.0001L12.4573 7.20718L11.043 5.79297L4.83594 12.0001ZM10.4858 12.0001L16.6929 18.2072L18.1072 16.793L13.3143 12.0001L18.1072 7.20718L16.6929 5.79297L10.4858 12.0001Z"></path>
									</svg>
									<span style={{color: "#fff"}}>Next</span>
								</div>
							</button>

							<div className={styles.buttonPaginado}>
								{pageNumbers &&
									pageNumbers.map((page) => {
										return (
											<>
												<div
													style={{
														display: "flex",
														marginLeft: "4px",
														marginRight: "4px",
													}}
												>
													<button
														className={ ` ${styles.buttonCount} 
														${currentPage === page? styles.colorCurrente:""}
														`
										
													}
														type="button"
														onClick={(event) => handleClick(page, event)}
													>
														{page}
													</button>
												</div>
											</>
										);
									})}
							</div>

							<button
								className={`${
									currentPage < totalPages ? styles.prev : styles.prevNot
								} ${styles.buttonPrev}`}
								onClick={() => handleNext(currentPage)}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<span style={{color: "#fff"}}>Prev</span>

									<svg
										className={styles.svgNextPrev}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path d="M19.1643 12.0001L12.9572 5.79297L11.543 7.20718L16.3359 12.0001L11.543 16.793L12.9572 18.2072L19.1643 12.0001ZM13.5144 12.0001L7.30728 5.79297L5.89307 7.20718L10.686 12.0001L5.89307 16.793L7.30728 18.2072L13.5144 12.0001Z"></path>
									</svg>
								</div>
							</button>
						</div>
					</>
					// : <NotFound/>
				}
			</div>
		</footer>
	);
};

export default Paginado;