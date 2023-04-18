import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { seekerPokemons, seekerPokemonsId,getPokemons } from "../../redux/action";
// import { useSelector } from "react-redux";


const Seeker = () => {
  // const pokemons = useSelector(state => state.pokemons)
  const [input, setInput] = useState({
    text: "",
    id: null,
  });
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      text: value,
    });
  };

  if (input.text === "") {
    dispatch(getPokemons())
  }
  const handleClick = () => {

    if (input.id !== null) {
      dispatch(seekerPokemonsId(input.id));
    } else if(typeof input.text === "string") {
      dispatch(seekerPokemons(input.text));
    }
  };

  return (
    <div>
      <div>
        <input onChange={handleInput} type="text" value={input.text} />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Seeker;