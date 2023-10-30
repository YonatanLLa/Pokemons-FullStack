import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import { getPokemons } from "../../redux/action";
import { useDispatch } from "react-redux";
import Loading from "../Loanding/Loading";
const Cards = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);
	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);

	const [currentPage, setCurrentPage] = useState(1);
	const countPage = 12;
	const startIndex = (currentPage - 1) * countPage;
	const endIndex = countPage + startIndex;

	const countPokemons = pokemons.slice(startIndex, endIndex);

	const paginados = (page) => {
		// console.log(page);
		setCurrentPage(page);
	};

	return (
		<div className={styles.cardsContinerPokemons}>
			{
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
							countPokemons.map(({ id, name, image, types, attack }, index) => {
								return (
									<div  key={index} >
										<Card
											
											id={id}
											name={name}
											image={image}
											type={types}
											attack={attack}
										/>
									</div>
								);
							})
						) : (
							<>
								<div
									style={{
										margin: "0",
										position: "absolute",
										left: "45%",
										top: "50%",
										transform: "translate(-50%, -50%)",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<Loading />
										<span style={{ color: "#ccc" }}>Loading</span>
									</div>
								</div>
							</>
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
