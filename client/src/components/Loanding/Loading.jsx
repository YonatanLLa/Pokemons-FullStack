import React from "react";
import styles from "./Loading.module.css"

const Loading = () => (
    <div>
        <div className={styles["lds-roller"]}>
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

export default Loading;