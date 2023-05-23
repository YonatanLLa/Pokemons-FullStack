import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import { useSelector } from "react-redux";
import axios from "axios";

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
	console.log(forms, "formsssssssssss....");
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
			.post("http://localhost:3001/pokemons", forms)
			.then((res) => alert(res))
			.catch((err) => alert(err));
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
					<span>{errors.name}</span>
					{/* {errors.name && <p>{errors.name}</p>} */}
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
					<span>{errors.hp}</span>
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
					<span>{errors.attack}</span>
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
					<span>{errors.defense}</span>
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
					<span>{errors.speed}</span>
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
					<span>{errors.height}</span>
				</div>

				{/* Peso: div7 */}
				<div className={styles.userBox}>
					<label htmlFor="">Peso</label>
					<input type="number" name="weight" onChange={handleInput} />
				</div>

				{/* Agregar varios tipos simultao */}
				<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
					<div style={{ display: "flex" }}>
						<div>
							<label htmlFor="">Tipos: </label>
							<select
								onChange={handleSelect}
								style={{
									height: "45px",
									width: "100px",
									borderRadius: "5px",
									marginLeft: "10px",
									marginRight: "3rem",
								}}
								className={
									forms.types.length >= 2 ? styles.selectDisable : null
								}
							>
								{types &&
									types.map((type, index) => {
										return (
											<>
												<option key={index} value={type.name}>
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
					<span>{errors.types}</span>
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
				</div>
				{/* div9 */}
				<div style={{ position: "absolute", bottom: "2rem", right: "2rem" }}>
					<button type="submit" className={styles.button}>
						Crea tu pokemon
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
