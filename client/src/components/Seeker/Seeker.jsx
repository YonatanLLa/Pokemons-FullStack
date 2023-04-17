import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { seekerPokemons } from "../../redux/action";
// import { useSelector } from 'react-redux'

const Seeker = () => {
  const [input, setInput] = useState("");
  const dispstch = useDispatch();

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
    console.log(value);
  };
  const handleClick = () => {
    dispstch(seekerPokemons(input));
  };

  return (
    <div>
      <div>
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Seeker;
