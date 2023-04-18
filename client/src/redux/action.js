import axios from "axios";
import {
  GET_POKEMONS,
  ORDER_POKE_AZ_ZA,
  ORDER_ATTACK,
  SET_IMAGE,
  SET_INPUT,
  SET_ID
} from "./type";

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
  return {
    type: ORDER_POKE_AZ_ZA, //<- <- <-
    payload: state,
  };
};

export const searchAttack = (attack) => {
  return {
    type: ORDER_ATTACK,
    payload: attack,
  };
};
export const getPokemonsImg = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("http://localhost:3001/pokemons");
    // console.log(apiPokemons);
    const pokeImage = apiPokemons.data.image;
    console.log(pokeImage);
    dispatch({
      type: SET_IMAGE,
      payload: pokeImage,
    });
  };
};

export const seekerPokemons = (name) => {
  console.log(name);
  return async (dispatch) => {
    const apiPokemons = await axios(`http://localhost:3001/pokemons?name=${name}`);
    const pokemon = apiPokemons.data.name;
    dispatch({
      type: SET_INPUT,
      payload: pokemon
    })
  };
};
export const seekerPokemonsId = (id) => {
  // console.log(id);
  return async(dispatch) => {
    const apiPokemons = await axios(`http://localhost:3001/pokemons/${id}`)
    const pokemonId = apiPokemons.data.id
    console.log(pokemonId);
    dispatch({
      type: SET_ID,
      payload: pokemonId
    })
  }
}