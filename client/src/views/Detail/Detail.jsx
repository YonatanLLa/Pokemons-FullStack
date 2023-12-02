import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import styles from "./Detail.module.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Detail = () => {

	const { id } = useParams();
	const pokemons = useSelector((state) => state.pokemons);
	const { name, hp, attack, defense, speed, weight, height, image, types } =
		pokemons.find((poke) => `${poke.id}` === `${id}`);

	const hpPercentage = (hp / 100) * 100;
	const attackPercentage = (attack / 100) * 100;
	const defensePercentage = (defense / 100) * 100;
	const speedPercentage = (speed / 100) * 100;

	return (
		<div className={styles.contDetail}>
			{/* image */}
			<section className={styles.detailContainer}>
				<div className={styles.detailImgSvg}>
					<img src={image} alt="" className={styles.imageDetail} />
					<div className={styles.containerDetilSvg}>
						<svg
							className={`${styles.detailSvg} ${types[0]}`}
							style={{
								backgroundImage: "none",
								background: "none",
								border: "none",
							}}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								d="M10.9999 2.04932L11 4.06182C7.05371 4.5539 4 7.9203 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C13.8487 19.9999 15.5509 19.3729 16.9055 18.3199L18.3289 19.7427C16.605 21.1535 14.4014 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81462 5.94662 2.55109 10.9999 2.04932ZM21.9506 13C21.7509 15.011 20.9555 16.8467 19.7433 18.3282L18.3199 16.9055C19.1801 15.7989 19.756 14.4606 19.9381 12.9999L21.9506 13ZM13.0011 2.04942C17.725 2.51895 21.4815 6.27583 21.9506 10.9998L19.9381 11C19.4869 7.38156 16.6192 4.51358 13.001 4.06194L13.0011 2.04942Z"
								style={{
									strokeWidth: "0.1px" /* Grosor de línea deseado */,
								}}
							></path>
						</svg>
					</div>
				</div>
				<h3 className={styles.contName}>
					{" "}
					<span> {name} </span>{" "}
				</h3>
			</section>

			<div clascardContinerPowersName={styles.containerDetail}>
				<div className={styles.descriptionDetail}>
					<h3 className={styles.avility}>Caracteristicas</h3>
					<div
						className={`${styles.cardContinerPower}  ${types[0]} ${styles.prueba}`}
				
					>
						<h3 style={{fontWeight: "300"}}>Peso: {weight}kg</h3>
						<h3 style={{fontWeight: "300"}}>Altura: {height}m</h3>
					</div>
					<h3 className={styles.avility}>Habilidades</h3>
					<div
						className={`${styles.cardContinerPower} ${types[0]} ${styles.containerPower}`}
						
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								justifyContent: "center",
							}}
						>
							<h3 style={{fontWeight: "300"}}>Vida: </h3>
							<ProgressBar progress={hpPercentage} />
							<span>{hp}%</span>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								justifyContent: "center",
							}}
						>
							<h3 style={{fontWeight: "300"}}>Ataque: </h3>
							<ProgressBar progress={attackPercentage} />
							<span style={{ marginRight: "32px" }}>{attack}%</span>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								left: "50px",
								gap: "10px",
								justifyContent: "center",
							}}
						>
							<h3 style={{fontWeight: "300"}}>Defensa: </h3>
							<ProgressBar progress={defensePercentage} />
							<span style={{ marginRight: "45px" }}>{defense}%</span>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								justifyContent: "center",
							}}
						>
							<h3 style={{fontWeight: "300"}}>Velocidad: </h3>
							<ProgressBar progress={speedPercentage} />
							<span style={{ marginRight: "28px" }}>{speed}%</span>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.directionHome}  >
				<Link to="/home">
					{/* <div> */}
					<svg
						style={{ width: "50px", fill: "#fff" }}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M15.0713 4.92871L16.4856 6.34292L11.8287 10.9998L21.0006 10.9999L21.0005 12.9999L11.8287 12.9998L16.4856 17.6566L15.0714 19.0708L8.00028 11.9998L15.0713 4.92871ZM4.00049 18.9997L4.00049 4.99972H6.00049L6.00049 18.9997H4.00049Z"></path>
					</svg>
					{/* </div>{" "} */}
				</Link>
			</div>
		</div>
	);
};

export default Detail;