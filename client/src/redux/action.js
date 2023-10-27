import axios from "axios";
import {
  GET_POKEMONS,
  ORDER_POKE_AZ_ZA,
  ORDER_ATTACK,
  SET_IMAGE,
  SET_INPUT,
  SET_ID,
  GET_TYPE,
  ORDER_TYPE,
  REFRESH,
  CREATED,

} from "./type";

export const getPokemons = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("/pokemons");
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
  return {
    type: ORDER_ATTACK,
    payload: attack,
  };
};

export const getPokemonsImg = () => {
  return async (dispatch) => {
    const apiPokemons = await axios("/pokemons");
    dispatch({
      type: SET_IMAGE,
      payload:  apiPokemons.data.image,
    });
  };
};

// !busqueda por name

export const seekerPokemons = (name) => {
  return async (dispatch) => {
    const apiPokemons = name? await axios(`/pokemons?name=${name}`)
    : await axios(`/pokemons`);
    dispatch({
      type: SET_INPUT,
      payload: apiPokemons.data.name
    })
  };
};

// !Mi componente get por ID

export const seekerPokemonsId = (id) => {
  return async(dispatch) => {
    const apiPokemons = await axios(`/pokemons/${id}`)
    dispatch({
      type: SET_ID,
      payload: apiPokemons.data.id
    })
  }
}

// !Mi getypes por Types

export const getTypes = () => {
  return async(dispatch) => {
    const apiPokemons = await axios(`/types`)
    dispatch({
      type: GET_TYPE,
      payload: apiPokemons.data
    })
  }
}

export const getCreated = (created) => {
  return{
    type: CREATED,
    payload: created
  }
}



export const setTypes = (types) => {
  console.log(types);
  return {
    type: ORDER_TYPE,
    payload: types
  }
}
export const setRefresh = (status) => {
  return{
    type: REFRESH,
    payload: status
  }
}