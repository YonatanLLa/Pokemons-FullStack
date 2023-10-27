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

const initialState = {
	pokemons: [],
	types: [],
	filterPokemons: [],
	// filterAttack: [],
	filterImg: [],
	filterId: null,
	pokeAux: [],
};

const reactReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POKEMONS:
			// retorna un estado nuevo
			return {
				...state,
				pokemons: action.payload,
				filterPokemons: action.payload,
				filterImg: action.payload,
				pokeAux: action.payload,
			};
		case GET_TYPE: {
			return {
				...state,
				types: action.payload,
			};
		}
		case ORDER_POKE_AZ_ZA:
			return {
				...state,
				pokemons: [...state.pokeAux].sort((a, b) => {
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
				pokemons: [...state.pokeAux].sort((a, b) => {
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
				pokemons: state.filterPokemons.filter(
					(poke) => {
						console.log(poke.name === action.payload, "pokeeeeeeee");
						return poke.name === action.payload}
				),
			};
		}
		
		

		case ORDER_TYPE: {
			const filterPokemons = state.filterPokemons;
			const typeFiltered =
				action.payload === "todos"
					? filterPokemons
					: filterPokemons.filter(
							(pokemon) =>
								pokemon.types &&
								pokemon.types.some((type) => type === action.payload)
					  );

			return {
				...state,
				pokemons: typeFiltered,
				pokeAux: typeFiltered,
			};
		}

		case CREATED: {
			console.log(state.pokeAux);

			const pokeAux = state.pokeAux;
			const createdPoke =
				action.payload === "created"
					? pokeAux.filter((poke) => {
							return poke.created === true;
					  })
					: pokeAux.filter((poke) => {
							return poke.created === false;
					  });
			return {
				...state,
				pokemons: createdPoke,
			};
		}
		case REFRESH: {
			return {
				...state,
				pokemons: action.payload,
			};
		}

		default:
			return { ...state };
	}
};

export default reactReducer;