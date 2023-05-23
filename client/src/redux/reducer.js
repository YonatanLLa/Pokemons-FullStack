import {
  GET_POKEMONS,
  ORDER_POKE_AZ_ZA,
  ORDER_ATTACK,
  SET_IMAGE,
  SET_INPUT,
  SET_ID,
  GET_TYPE,
  ORDER_TYPE,
  REFRESH
} from "./type";

const initialState = {
  pokemons: [],
  types: [],
  filterPokemons: [],
  filterAttack: [],
  filterImg: [],
  filterId: null,
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
        filterId: action.payload,
      };
    case GET_TYPE:{
      return{
        ...state,
        types: action.payload
      }
    }
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
            if (a.attack > b.attack) return 1;
            return 0;
          } else {
            if (a.attack < b.attack) return 1;
            if (a.attack > b.attack) return -1;
            return 0;
          }
        }),
      };
    case SET_IMAGE:
      return {
        ...state,
        filterImg: action.payload,
      };
    case SET_INPUT: {
      return {
        ...state,
        pokemons: state.filterImg.filter(
          (poke) => poke.name === action.payload
        ),
      };
    }
    case SET_ID: {
      return {
        ...state,
        pokemons: state.filterId.filter(
          (poke) => {
          }
          // poke => poke.id === action.payload
        ),
      };
    }
  
    case ORDER_TYPE: {
      const filterPokemons = state.filterPokemons
      const typeFiltered = action.payload === "todos"
                        ?filterPokemons
                        :filterPokemons.filter(pokemon =>pokemon.Types && pokemon.Types.some(type => type === action.payload))
        
      return {
        ...state,
        pokemons:typeFiltered
      };
    }
    case REFRESH:{
      return{
        ...state,
        pokemons: action.payload
      }
    }

    default:
      return { ...state };
  }
};

export default reactReducer;
