import { GET_POKEMONS, ORDER_POKE_AZ_ZA, ORDER_ATTACK, SET_IMAGE,SET_INPUT } from "./type";

const initialState = {
  pokemons: [],
  filterPokemons: [],
  filterAttack: [],
  filterImg: []
};

const reactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      // retorna un estado nuevo
      return {
        ...state,
        pokemons: action.payload,
        filterPokemons: action.payload,
        filterAttack: action.payload,
        filterImg: action.payload,
      };
    case ORDER_POKE_AZ_ZA:
      return {
        ...state,
        pokemons: [...state.filterPokemons].sort((a, b) => {
          if (action.payload === "Asendente") {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          } else {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          }
        }),
      };
    case ORDER_ATTACK:
      return {
        ...state,
        pokemons: [...state.filterAttack].sort((a, b) => {
          if (action.payload === "Asendente") {
            if (a.attack < b.attack) return -1;
            if(a.attack > b.attack) return 1
            return 0;
          } else {
            if(a.attack < b.attack) return 1
            if(a.attack > b.attack) return -1
            return 0;
          }
        }),
      };
    case SET_IMAGE:
      return{
        ...state,
        filterImg: action.payload
      }
      case SET_INPUT: {
        return {
          ...state,
          pokemons: state.filterImg.filter(poke => poke.name === action.payload)
        }
      }
    default:
      return { ...state };
  }
};

export default reactReducer;
