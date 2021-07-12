import { types } from '../types/types';

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            //return a new object
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            //reset the state
                return { }
    
        default:
            return state;
    }

}