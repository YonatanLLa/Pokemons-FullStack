import React from "react";
import styles from "./Filter.module.css"
import { useDispatch } from "react-redux";
import {searchTypes} from "../../redux/action"
import { useState } from "react";
import {searchAttack} from "../../redux/action"
import Carrusel from "../Carrusel/Carrusel";
// import Paginado from "../Paginado/Paginado";

const Filter = () => {
  const dispatch = useDispatch()
  const [order, setOrder] = useState("");
  const [attack, setAttck] = useState("");

  const handleSortOrder = (event) => {
    console.log(event);
    const selectedOrder = event.target.value;
    setOrder(selectedOrder);
    dispatch(searchTypes(selectedOrder));
  }
  const handleAttack = (event) => {
    console.log(event);
    const selectAttack = event.target.value;
    setAttck(selectAttack)
    dispatch(searchAttack(attack))
  }
  return (
    <div className={styles.filterContainer}>
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
          <option value="Asendente">Mayor Attack</option>
          <option value="Desendente">Menor Attack</option>
        </select>
      </div>
      <div>
        <Carrusel/>
      </div>
    </div>
  );
};

export default Filter;
