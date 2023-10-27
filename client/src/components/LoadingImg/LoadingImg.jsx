import React from "react";
import styles from "./LoadingImg.module.css"

const LoadingImg = () => {
	return (
		<div>
			<div className={styles["lds-grid"]}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingImg;