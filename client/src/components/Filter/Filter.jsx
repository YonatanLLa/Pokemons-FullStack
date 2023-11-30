import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
	searchAttack,
	searchTypes,
	setTypes,
	getCreated,
} from "../../redux/action";
import { getTypes } from "../../redux/action";

const Filter = (paginado) => {
	const dispatch = useDispatch();
	const types = useSelector((state) => state.types);

	const [order, setOrder] = useState("");
	const [attack, setAttck] = useState("");
	const [type, setType] = useState("");
	const [created, setCreated] = useState("");

	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	const handleSortOrder = (event) => {
		const selectedOrder = event.target.value;
		setOrder(selectedOrder);
		dispatch(searchTypes(selectedOrder));
		paginado(paginado)
	};

	const handleAttack = (event) => {
		const selectAttack = event.target.value;
		setAttck(selectAttack);
		dispatch(searchAttack(selectAttack));
	};

	const handleTypes = (event) => {
		const selectedType = event.target.value;
		setType(selectedType);
		dispatch(setTypes(selectedType));

	};

	const handleCreated = (event) => {
		const selectCreated = event.target.value;
		setCreated(selectCreated);
		dispatch(getCreated(selectCreated));

	};
	// !Despliegue lento <--

	return (
		<div className={styles.filterContainer}>
			<div></div>
			<div className={`${styles.select} select`}>
				{/* <label htmlFor="">Fitrado: </label> */}

				<select name="" id="" onChange={handleTypes} value={type}>
					<>
						<option value="todos">Selection of Type</option>
						<option value="todos">todo</option>
						{types &&
							types.map((types, index) => {
								return (
									// <div key={types}>
										<option key={index} value={types.name}>
											{types.name}
										</option>
									// </div>
								);
							})}
					</>
				</select>
			</div>

			<div className={styles.select}>
				<select
					name="sortOrder"
					className={styles.selectFilter}
					value={order}
					onChange={handleSortOrder}
					id=""
				>
					{/* <option value="todos">todo</option> */}
					<option value="Asendente">A-Z</option>
					<option value="Desendente">Z-A</option>
				</select>
			</div>

			<div className={styles.select}>
				{/* <label htmlFor="">Filtrado Por: </label> */}
				<select name="" id="" value={attack} onChange={handleAttack}>
					{/* <option value="todos">todo</option> */}
					<option value="Asendente">Attack - </option>
					<option value="Desendente">Attack + </option>
				</select>
			</div>

			<div className={styles.select}>
				{/* <label htmlFor="">Filtrado Por: </label> */}
				<select name="" id="" value={created} onChange={handleCreated}>
					{/* <option value="todos">todo</option> */}
					<option value="created">pokemons creados</option>
					<option value="api">pokemons</option>
				</select>
			</div>

			<div></div>
		</div>
	);
};

export default Filter;
