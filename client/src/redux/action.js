import axios from "axios";
import { GET_POKEMONS, ORDER_POKE_AZ_ZA, ORDER_ATTACK, SET_IMAGE } from "./type";


export const getPokemons = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("http://localhost:3001/pokemons");
    // console.log(apiPokemons);
    const pokemons = apiPokemons.data;
    dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
};
export const searchTypes = (state) => {
  return{
    type: ORDER_POKE_AZ_ZA,
    payload: state,
  }
}

export const searchAttack = (attack) => {
  return{
    type: ORDER_ATTACK,
    payload: attack,
  }
}
export const getPokemonsImg = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("http://localhost:3001/pokemons");
    // console.log(apiPokemons);
    const pokeImage = apiPokemons.data.image;
    dispatch({
      type: SET_IMAGE,
      payload: pokeImage,
    });
  };
};


