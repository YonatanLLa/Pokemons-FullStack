import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import { useSelector } from "react-redux";
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
    types: []
  });

  const [errors, setErrors] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: []

  });

  const types = useSelector((state) => state.types);

  const handleSelect = (event) => {
    const value = event.target.value;
    setforms((forms)=>({...forms, types: [...forms.types, Number(value)] }))
  }
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
    event.preventDefault()
    axios.post("http://localhost:3001/pokemons", forms)    
    .then(res => alert(res))
    .catch(err => alert(err))
    
  }
  useEffect(() => {
    setErrors(validation(forms));
  }, [forms]);
  return (
    <div className={styles.loginBox} >
      <h2>Fromulario Pokemon</h2>
      <form className={styles.childrenForm} onSubmit={submitHandler}>
        
        <div>
          {/* name */}
          <div className={styles.userBox}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              value={forms.name}
              onChange={handleInput}
            />
            <p>{errors.name}</p>
            {/* {errors.name && <p>{errors.name}</p>} */}
          </div>

          {/* hp */}
          <div className={styles.userBox}>
            <label htmlFor="hp">Hp:</label>
            <input
              type="range"
              name="hp"
              // step="1"
              value={forms.hp}
              onChange={handleInput}
            />
          <p>{errors.hp}</p>
          </div>

          {/* attack */}
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

          {/* defens */}
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
        </div>
        <div>
          {/* velocidad */}
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

          {/* Altura */}
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

          {/* Peso */}
          <div className={styles.userBox}>
            <label htmlFor="">Peso</label>
            <input type="number" name="weight" onChange={handleInput} />
          </div>
          {/* Agregar varios tipos simultao */}
          <div>
            <label htmlFor="">Tipos: </label>
            <select onChange={handleSelect}>
              {types &&
                types.map((type, index) => {
                  return (
                    <>
                      <option key={index} value={type.id} >
                        
                        {type.name}
                      </option>
                    </>
                  );
                })}
            </select>
            <span>{errors.types}</span>
            <div>
              {
                forms.types.map(type => {
                 const dato =  types.find(typ => typ.id === type)
                 return(
                  <ul><li>{dato.name}</li></ul>
                 )
                })
              }
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <input src="" alt="" type="file" />
        </div>
      {/* <button type="submit" className={styles.button}> */}
        Crea tu pokemon
      {/* </button> */}
      </form>
    </div>
  );
};

export default Form;
