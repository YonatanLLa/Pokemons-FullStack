import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios"
const Form = () => {
	const [forms, setforms] = useState({
		name: "",
		hp: "",
		attack: "",
		defense: "",
		speed: "",
		height: "",
		weight: "",
		image: "",
		types: [],
	});

	console.log(forms);
	const [errors, setErrors] = useState({
		name: "",
		hp: "",
		attack: "",
		defense: "",
		speed: "",
		height: "",
		weight: "",
		image: "",
		types: [],
	});

	const types = useSelector((state) => state.types);

	const handleSelect = (event) => {
		const value = event.target.value;
		setforms((forms) => ({ ...forms, types: [...forms.types, value] }));
	};
	const handleInput = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setforms({
			...forms,

			[property]: value,
		});
		setErrors(validation({ ...forms, [property]: value }));
	};

	const submitHandler = (event) => {

		event.preventDefault();
		axios
			.post("/pokemons", forms)
			.then((response) => {
				if (response.status === 200) {
					Swal.fire({
						background: "#000",
						title: "Nuevo Pokemon!",
						text: "Modal with a custom image.",
						html: `<h3>${forms.name}</h3>
								<img style="width: 300px;" src="${forms.image}"  alt="" />`,
						imageWidth: 200,
						imageHeight: 100,
						imageAlt: "Custom image",
					});
					setforms({
						name: "",
						hp: "",
						attack: "",
						defense: "",
						speed: "",
						height: "",
						weight: "",
						image: "",
						types: [],
					});

				}
				history.push("/home")

			})
			.catch((err) => {
				if (err.response.data.error === "Pokemon already exists") {
					Swal.fire({
						background: "#000",
						title: "Oops...",
						text: "Pokemon already exists!",
						icon: "warning",
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "ok",
					});
				} else if (err.response.status === 400) {

					console.log(err);
					Swal.fire({
						background: "#000",
						icon: "error",
						title: "Oops...",
						text: "Datos incompletos",
					});
				}
			});
	};
	useEffect(() => {
		setErrors(validation(forms));
	}, [forms]);

	return (
		<div className={styles.loginBox}>
			<form className={styles.childrenForm} onSubmit={submitHandler}>
				<div className={styles.div1}>
					<h2>Fromulario Pokemon</h2>
				</div>
				{/* name: div1 */}
				<div className={styles.userBox}>
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						name="name"
						value={forms.name}
						onChange={handleInput}
					/>

					{errors.name && (
						<span className={styles.colorDebil}>{errors.name}</span>
					)}
				</div>

				{/* hp: div2 */}
				<div className={styles.userBox}>
					<label htmlFor="hp">Hp:</label>
					<input
						type="range"
						name="hp"
						// step="1"
						value={forms.hp}
						onChange={handleInput}
					/>
					{forms.hp <= 30
						? errors.hp && (
								<span
									className={styles.colorDebil}
								>{`${errors.hp}: ${forms.hp}%`}</span>
						  )
						: forms.hp <= 60
						? errors.hp && (
								<span
									className={styles.colorIntermedio}
								>{`${errors.hp}: ${forms.hp}%`}</span>
						  )
						: forms.hp <= 99
						? errors.hp && (
								<span
									className={styles.colorAlta}
								>{`${errors.hp}: ${forms.hp}%`}</span>
						  )
						: errors.hp && (
								<span
									className={styles.colorMax}
								>{`${errors.hp}: ${forms.hp}%`}</span>
						  )}
				</div>

				{/* attack: div3 */}
				<div className={styles.userBox}>
					<label htmlFor="">Attack</label>
					<input
						type="range"
						name="attack"
						value={forms.attack}
						onChange={handleInput}
					/>
					{forms.attack <= 30
						? errors.attack && (
								<span
									className={styles.colorDebil}
								>{`${errors.attack}: ${forms.attack}%`}</span>
						  )
						: forms.attack <= 60
						? errors.attack && (
								<span
									className={styles.colorIntermedio}
								>{`${errors.attack}: ${forms.attack}%`}</span>
						  )
						: forms.attack <= 99
						? errors.attack && (
								<span
									className={styles.colorAlta}
								>{`${errors.attack}: ${forms.attack}%`}</span>
						  )
						: errors.attack && (
								<span
									className={styles.colorMax}
								>{`${errors.attack}: ${forms.attack}%`}</span>
						  )}
				</div>

				{/* defens: div4 */}
				<div className={styles.userBox}>
					<label htmlFor="">defense</label>
					<input
						type="range"
						name="defense"
						value={forms.defense}
						onChange={handleInput}
					/>
					{forms.defense <= 30
						? errors.defense && (
								<span
									className={styles.colorDebil}
								>{`${errors.defense}: ${forms.defense}%`}</span>
						  )
						: forms.defense <= 60
						? errors.defense && (
								<span
									className={styles.colorIntermedio}
								>{`${errors.defense}: ${forms.defense}%`}</span>
						  )
						: forms.defense <= 99
						? errors.defense && (
								<span
									className={styles.colorAlta}
								>{`${errors.defense}: ${forms.defense}%`}</span>
						  )
						: errors.defense && (
								<span
									className={styles.colorMax}
								>{`${errors.defense}: ${forms.defense}%`}</span>
						  )}
				</div>

				{/* velocidad: div5 */}
				<div className={styles.userBox}>
					<label htmlFor="">speed</label>
					<input
						type="range"
						name="speed"
						value={forms.speed}
						onChange={handleInput}
					/>
					{forms.speed <= 30
						? errors.speed && (
								<span
									className={styles.colorDebil}
								>{`${errors.speed}: ${forms.speed}%`}</span>
						  )
						: forms.speed <= 60
						? errors.speed && (
								<span
									className={styles.colorIntermedio}
								>{`${errors.speed}: ${forms.speed}%`}</span>
						  )
						: forms.speed <= 99
						? errors.speed && (
								<span
									className={styles.colorAlta}
								>{`${errors.speed}: ${forms.speed}%`}</span>
						  )
						: errors.speed && (
								<span
									className={styles.colorMax}
								>{`${errors.speed}: ${forms.speed}%`}</span>
						  )}
				</div>

				{/* Altura: div6 */}
				<div className={styles.userBox}>
					<label htmlFor="">Altura</label>
					<input
						type="number"
						name="height"
						value={forms.height}
						onChange={handleInput}
					/>
					{errors.height && (
						<span className={styles.colorDebil}>{errors.height}</span>
					)}
				</div>

				{/* Peso: div7 */}
				<div className={styles.userBox}>
					<label htmlFor="">Peso</label>
					<input
						type="number"
						name="weight"
						value={forms.weight}
						onChange={handleInput}
					/>
					{errors.weight && (
						<span className={styles.colorDebil}>{errors.weight}</span>
					)}
				</div>

				{/* Agregar varios tipos simultao */}
				<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
					<div style={{ display: "flex" }}>
						<div>
							<label htmlFor="">Tipos: </label>
							<select
								onChange={handleSelect}
								
								className={
									`${forms.types.length >= 2 ? styles.selectDisable : null} ${styles.selectForm}`
								}
							>
								{types &&
									types.map((type, index) => {
										return (
											<>
												<option className={styles.optionForm} key={index} value={type.name}>
													{type.name}
												</option>
											</>
										);
									})}

								{/* <>{forms.types.map(type=>{return <span>{type.name}</span>)}}</> */}
							</select>
						</div>
						<div className={styles.tipesForm}>
							{forms.types.map((type) => {
								// const dato = types.find((typ) => typ.id === type);
								return (
									<div>
										<div
											className={`${styles.divTypesForm} ${type}`}
											style={{
												display: "flex",
												borderRadius: "5px",
												backgroundColor: "transparent",
												border: "none",
												width: "30px",
												height: "30px",
											}}
										></div>
										<span style={{ padding: "1px" }}>{type}</span>
									</div>
								);
							})}
						</div>
					</div>
					{errors.types && (
						<span className={styles.colorDebil}>{errors.types}</span>
					)}
				</div>
				{/* input: div8 */}
				<div className={styles.userBox}>
					<label htmlFor="image">Url: </label>
					<input
						name="image"
						value={forms.image}
						src=""
						placeholder="imagen..."
						onChange={handleInput}
					/>
					{errors.image && (
						<span className={styles.colorDebil}>{errors.image}</span>
					)}
				</div>
				{/* div9 */}
				<div className={styles.bottomForm} >
					<button type="submit" className={styles.button}>
						Crea tu pokemon
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
