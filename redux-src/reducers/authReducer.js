import { SIGN_UP ,SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedUp: null,
    isSignedIn: null,
    userId: null
}

export default (state= INITIAL_STATE, action)=>{
    switch (action.type){
        case SIGN_UP:
            return {...state, isSignedUp: true, userId: action.payload}
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: null, userId: null}
        default:
            return state
    }
}