import React from "react";
import styles from "./Filter.module.css"
import { useDispatch } from "react-redux";
import {searchTypes} from "../../redux/action"
import { useState } from "react";
import {searchAttack} from "../../redux/action"
import Carrusel from "../Carrusel/Carrusel";

const Filter = () => {
  const dispatch = useDispatch()
  const [order, setOrder] = useState("");
  const [attack, setAttck] = useState("");

  const handleSortOrder = (event) => {
    const selectedOrder = event.target.value;
    setOrder(selectedOrder);
    dispatch(searchTypes(selectedOrder));
  }
  // 2
  const handleAttack = (event) => {
    const selectAttack = event.target.value;
    setAttck(selectAttack)
    dispatch(searchAttack(selectAttack))
  }
  return (
    <div className={styles.filterContainer}>

      <Carrusel/>
      <div>
        <label htmlFor="sortOrder">Filtrador Por: </label>
        <select name="sortOrder" value={order} onChange={handleSortOrder} id="">
          <option value="Asendente">A-Z</option>
          <option value="Desendente">Z-A</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="">Filtrado Por: </label>
        <select name="" id="" value={attack} onChange={handleAttack}>
          <option value="Asendente">Menor Attack</option>
          <option value="Desendente">Mayor Attack</option>
        </select>
      </div>

      <div>
      </div>
    </div>
  );
};

export default Filter;
