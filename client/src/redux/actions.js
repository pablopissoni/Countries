import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_SORT = 'GET_SORT';
export const POPULATION = 'POPULATION';
export const CONTINENTS = 'CONTINENTS';
export const SEARCH = 'SEARCH';
export const ERROR = 'ERROR';
export const CLOSE = 'CLOSE';
export const CHECKING = 'CHECKING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_SELECT_ACTIVITY = 'GET_SELECT_ACTIVITY';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID'; //* AGREGADO POR MI

export const getCountries = () => async dispatch => {
    try {
        let json = await axios.get('http://localhost:3001/countries') //! Revisar que no sea `http://localhost:3001/countries`
        return dispatch({ type: GET_COUNTRIES, payload: json.data })
    } catch (error) {
        console.log(error.message)
    }
}
export const getCountriesById = (id) => async dispatch => {
    try {
        let detail = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({ type: GET_COUNTRIES_BY_ID, payload: detail.data })

    } catch (error) {
        console.log("Error en reducer al buscar por ID: ",error.message)
    }
}

export const getActivities = () => async dispatch => {
    let json = await axios.get('http://localhost:3001/activity')
    return dispatch({ type: GET_ACTIVITIES, payload: json.data })
}

export const getSelectActivity = (payload) => dispatch => {
    return dispatch({ type: GET_SELECT_ACTIVITY, payload })
}
export const getSort = (payload) => dispatch => {
    return dispatch({ type: GET_SORT, payload })
}

export const population = (payload) => dispatch => {
    return dispatch({ type: POPULATION, payload })
}

export const continent = payload => dispatch => {
    return dispatch({ type: CONTINENTS, payload })
}

export const getByName = (value) => async dispatch => {
    try {
        let json = await axios.get(`http://localhost:3001/countries?name=${value}`) //! Revisar que pueda usar esta direccion
        return dispatch({ type: SEARCH, payload: json.data })
    } catch (error) {
        return dispatch({ type: ERROR })
    }
}

export const deleteFilters = () => dispatch => {
    return dispatch({ type: 'DELETE_FILTERS' })
}

export const errorClose = () => dispatch => {
    return dispatch({ type: CLOSE })
}
export const checking = () => dispatch => {
    return dispatch({ type: CHECKING })
}