import React, { useRef, useEffect, useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";
// mostrar los pokemons

const Card = ({ name, image, type, id }) => {
	const [imageLoaded, setImageLoaded] = useState(false)

	console.log(imageLoaded);

	const handleImageLoad = () => {
		setImageLoaded(true)
	}

	
	return (
		<div className={styles.cardContainer}>
			<h1 className={styles.cardTitle} style={{ textAlign: "center" }}>
				{name}
			</h1>
			<Link style={{ border: "none" }} to={`/detail/${id}`}>
				<div className={styles.loadingContainer}>
					{!imageLoaded && <div style={{width: "260px", height: "360px"}}><Loading/></div>}
						<img
							className={`${styles.cardImg} ${imageLoaded ? styles.showImage : ""}`}
							src={image}
							alt={name}
							onLoad={handleImageLoad}
						/>
				</div>
			</Link>
			<div className={styles.cardDetails}>
				{type.map((tipo, index) => {
					return (
						<div
						key={index}
							className={` ${styles.cardType}  ${tipo}`}
							style={{ backgroundColor: "transparent", border: "none" }}
						>
							{/* <h3>type: {}</h3> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;