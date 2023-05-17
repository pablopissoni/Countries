import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;





// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk';
// import rootReducer from "./reducer";


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export default store;
//! REPASAR QUE ESTE BIEN O QUE SE PUEDA MEJORAR ↑↑↑↑↑↑


//! store de "rick and morty"
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from './reducer';
// import ThunkMiddleware from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(ThunkMiddleware))
// );

// export default store;