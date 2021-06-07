import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';

//let us to combine several reducers in order to use them in the store
const reducers =combineReducers({
    auth: authReducer
})

export const store= createStore(reducers)