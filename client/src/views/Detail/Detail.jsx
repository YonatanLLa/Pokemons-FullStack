import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
	const obj = {
		name: "yonatan",
		id: "44f3c8e5-55ca-452f-9c76-d9ae6c953b49",
		hp: 10,
		attack: 49,
		defense: 45,
		speed: 49,
		height: 7,
		weight: 69,
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
		created: false,
		Types: ["flying", "fire"],
	};
	const { id } = useParams();
	const pokemons = useSelector((state) => state.pokemons);
	const { name, hp, attack, defense, speed, weight, height, image, Types } =
		pokemons.find((poke) => `${poke.id}` === `${id}`);
	return (
		<div className={styles.contDetail}>
			<div className={styles.containerDetail}>
				<div className={styles.descriptionDetail}>
					<h3>Name: {name}</h3>
					<h3>Hp: {hp}</h3>
					<h3>Attack: {attack}</h3>
					<h3>Defense: {defense}</h3>
					<h3>Speed: {speed}</h3>
					<h3>Weight: {weight}</h3>
					<h3>Height: {height}</h3>
				</div>

				<Link to="/home">
					<button>Regresar</button>
				</Link>
			</div>
			<div className={styles.detailImgSvg}>
				<img src={image} alt="" className={styles.imageDetail} />
				<div className={styles.containerDetilSvg}>
					<svg className={`${styles.detailSvg} ${Types[0]}`}
						style={{ backgroundImage: "none", background: "none" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M10.9999 2.04932L11 4.06182C7.05371 4.5539 4 7.9203 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C13.8487 19.9999 15.5509 19.3729 16.9055 18.3199L18.3289 19.7427C16.605 21.1535 14.4014 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81462 5.94662 2.55109 10.9999 2.04932ZM21.9506 13C21.7509 15.011 20.9555 16.8467 19.7433 18.3282L18.3199 16.9055C19.1801 15.7989 19.756 14.4606 19.9381 12.9999L21.9506 13ZM13.0011 2.04942C17.725 2.51895 21.4815 6.27583 21.9506 10.9998L19.9381 11C19.4869 7.38156 16.6192 4.51358 13.001 4.06194L13.0011 2.04942Z"></path>
					</svg>
			
				</div>
			</div>
		</div>
	);
};

export default Detail;
