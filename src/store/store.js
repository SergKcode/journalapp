import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

//Config to apply different middelwares
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//let us to combine several reducers in order to use them in the store
const reducers =combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})


export const store= createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);