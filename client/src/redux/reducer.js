import { CHECKING, CLOSE, CONTINENTS, ERROR,DELETE_FILTERS , GET_ACTIVITIES, POST_ACTIVITY,GET_COUNTRIES_BY_ID, GET_COUNTRIES,CLEAN_DETAIL , GET_SELECT_ACTIVITY, GET_SORT, POPULATION, SEARCH } from './actions'


const initialState = {
    countries: [],
    sorting: [],
    detail: {},
    error: false, //? Comprobar que haga falta
    check: false,   //? Comprobar que haga falta
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES: 
            return {
                ...state,
                countries: action.payload,
                sorting: action.payload,
            }

        case GET_COUNTRIES_BY_ID:
            return  {
                ...state,
                detail: action.payload,
            }

        case CLEAN_DETAIL:
                return {
                    ...state,
                    detail: {}
                }

        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }

        case GET_SELECT_ACTIVITY:
            let sortedCountriesByActivity = action.payload === 'all'
                ? [...state.countries]
                : [...state.countries].filter(c => c.activities?.some(a => a.name === action.payload));
            return {
                ...state,
                sorting: sortedCountriesByActivity,
            };

        // case GET_SELECT_ACTIVITY:
        //     const result = state.countries.filter(event => event.activity.includes(action.payload))
        //     return {
        //         ...state,
        //         sorting: result,
        //     }

        case GET_SORT:
            const sort = action.payload === 'asc'
            ? [...state.countries].sort((a, b) => a.name.localeCompare(b.name))
            : [...state.countries].sort((a, b) => b.name.localeCompare(a.name));

            return {
            ...state,
                sorting: sort
            }
        // case GET_SORT:
        //     const sort = action.payload === 'asc' ? state.sorting.sort((a, b) => {
        //         if (a.name > b.name) return 1;

        //         if (a.name < b.name) return -1;

        //         return 0;
        //     }) : action.payload === 'desc' ? state.sorting.sort((a, b) => {
        //         if (a.name > b.name) return -1;

        //         if (a.name < b.name) return 1;

        //         return 0;
        //     }) : [...state.countries]
        //     return {
        //         ...state,
        //         sorting: sort
        //     }

        case POPULATION:
            const sortPopulation = action.payload === 'high'
            ? [...state.countries].sort((a, b) => b.population - a.population)
            : [...state.countries].sort((a, b) => a.population - b.population);
            return {
                ...state,
                sorting: sortPopulation
            }

        // case POPULATION:
        //     const sortPopulation = action.payload === 'high' ?
        //         state.sorting.sort((a, b) => b.population - a.population) :
        //         action.payload === 'low' ? state.sorting.sort((a, b) => a.population - b.population) : [...state.countries]
        //     return {
        //         ...state,
        //         sorting: sortPopulation
        //     }

        case CONTINENTS:
            const select = [...state.countries]
            let filter = select.filter(event => event.continent === action.payload)
            console.log(filter);
            return {
                ...state,
                sorting: action.payload === 'all' ? [...state.countries] : filter
            }

        case SEARCH:
            return {
                ...state,
                sorting: action.payload
            }

        case DELETE_FILTERS:
            return {
                ...state,
                sorting: state.countries
            }

        case ERROR:
            return {
                ...state,
                error: true
            }

        case CLOSE:
            return {
                ...state,
                error: state.error === false ? false : false,
                check: state.check === false ? false : false
            }

        case CHECKING:
            return {
                ...state,
                check: true
            }

        default: return state
    }
}

export default rootReducer