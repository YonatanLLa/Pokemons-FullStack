import React, { useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({progress }) => {
	// const [progress, setProgress] = useState(0)
	// setProgress(hp)
	return (
		<div className={styles.progressBar}>
			<div className={styles.progress} style={{ width: `${progress}%` }}></div>
	    </div>
	);
};

export default ProgressBar;