import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import { getPokemons } from "../../redux/action";
import { useDispatch } from "react-redux";
import NotFound from "../NotFound/NotFound";

const Cards = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);
	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);

	const [currentPage, setCurrentPage] = useState(1);
	const countPage = 3;
	const startIndex = (currentPage - 1) * countPage;
	const endIndex = countPage + startIndex;

	const countPokemons = pokemons.slice(startIndex, endIndex);

	const paginados = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className={styles.cardsContinerPokemons}>
			{
				// countPokemons.lenght?
				<>
					<div className={styles.cadsPaginado}>
						<Paginado
							currentPage={currentPage}
							pokemons={pokemons}
							paginado={paginados}
							countPage={countPage}
						/>
					</div>
					<div className={styles.cardsContainer}>
						{countPokemons.length ? (
							countPokemons.map(({ id, name, image, Types, attack }) => {
								return (
									<>
										<Card
											key={id}
											id={id}
											name={name}
											image={image}
											type={Types}
											attack={attack}
										/>
									</>
								);
							})
						) : (
							<NotFound />
						)}
					</div>

					<div>
						<Paginado
							currentPage={currentPage}
							pokemons={pokemons}
							paginado={paginados}
							countPage={countPage}
						/>
					</div>
				</>
				// : <NotFound/>
			}
		</div>
	);
};

export default Cards;
