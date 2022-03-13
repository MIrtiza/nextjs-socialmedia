import UserApi from '../../apis/usersApi'
import { SIGN_UP ,SIGN_IN, SIGN_OUT } from './types';


export const signUp = (formValues)=> async dispatch=> {
  const response = await UserApi.post('/users', formValues);
  dispatch({type: SIGN_UP, payload: response.data})

}

export const signIn = (userID)=>{
    return{
        type: SIGN_IN,
        payload: userID
    }
}

export const signOut = (userID)=>{
    return{
        type: SIGN_OUT
    }
}