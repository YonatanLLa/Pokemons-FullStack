import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import { getPokemons } from "../../redux/action";
import { useDispatch } from "react-redux";

const Cards = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);
	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);

	const [currentPage, setCurrentPage] = useState(1);
	const countPage = 1;
	const startIndex = (currentPage - 1) * countPage;
	const endIndex = countPage + startIndex;

	const countPokemons = pokemons.slice(startIndex, endIndex);

	const paginado = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className={styles.cardsContinerPokemons}>
			<div className={styles.cadsPaginado}>
				<Paginado
					pokemons={pokemons}
					paginado={paginado}
					countPage={countPage}
				/>
			</div>
			<div className={styles.cardsContainer}>
				{countPokemons ? (
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
					<p>Cargando.......</p>
				)}
			</div>

			<div>
				{/* <Paginado
          pokemons={pokemons}
          paginado={paginado}
          countPage={countPage}
        /> */}
			</div>
		</div>
	);
};

export default Cards;
