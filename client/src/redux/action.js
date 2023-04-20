import axios from "axios";
import {
  GET_POKEMONS,
  ORDER_POKE_AZ_ZA,
  ORDER_ATTACK,
  SET_IMAGE,
  SET_INPUT,
  SET_ID,
  GET_TYPE,
  ORDER_TYPE
} from "./type";

export const getPokemons = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("http://localhost:3001/pokemons");
    dispatch({
      type: GET_POKEMONS,
      payload: apiPokemons.data,
    });
  };
}

export const searchTypes = (state) => {
  return {
    type: ORDER_POKE_AZ_ZA, //<- <- <-
    payload: state,
  };
};

export const searchAttack = (attack) => {
  console.log(attack);
  return {
    type: ORDER_ATTACK,
    payload: attack,
  };
};

export const getPokemonsImg = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("http://localhost:3001/pokemons");
    dispatch({
      type: SET_IMAGE,
      payload:  apiPokemons.data.image,
    });
  };
};

export const seekerPokemons = (name) => {
  return async (dispatch) => {
    const apiPokemons = await axios(`http://localhost:3001/pokemons?name=${name}`);
    dispatch({
      type: SET_INPUT,
      payload: apiPokemons.data.name
    })
  };
};

export const seekerPokemonsId = (id) => {
  return async(dispatch) => {
    const apiPokemons = await axios(`http://localhost:3001/pokemons/${id}`)
    dispatch({
      type: SET_ID,
      payload: apiPokemons.data.id
    })
  }
}

export const getTypes = () => {
  return async(dispatch) => {
    const apiPokemons = await axios(`http://localhost:3001/types`)
    // console.log(apiPokemons.data);
    dispatch({
      type: GET_TYPE,
      payload: apiPokemons.data
    })
  }
}
export const setTypes = (types) => {
  // console.log(types);
  return {
    type: ORDER_TYPE,
    payload: types
  }
}