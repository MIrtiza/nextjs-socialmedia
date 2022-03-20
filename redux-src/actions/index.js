import UserApi from '../../apis/usersApi'
import { SIGN_UP ,SIGN_IN, SIGN_OUT } from './types';


export const signUp = (formValues)=> async dispatch=> {
  const response = await UserApi.post('/users', formValues);
  dispatch({type: SIGN_UP, payload: response.data})

}

export const signIn = (formValues)=> async dispatch =>{
    const response = await UserApi.get('/users', formValues);
    dispatch({type: SIGN_IN, payload: response.data})
}

export const signOut = ()=>{
    return{
        type: SIGN_OUT
    }
}