import {SET_AUTHED_USER, LOGOUT_AUTHED_USER} from '../constants/Constants'
import {loginRequestAPI, logoutRequestAPI} from '../utils/api'
import {setError} from './error'
import { push } from 'react-router-redux'


export function setAuthedUser (user) {
    return {
        type: SET_AUTHED_USER,
        user:{
            id:user.id,
            type:user.user_type,
            name:user.name
        }
    }
}

export function performLogout(){
    return {
        type: LOGOUT_AUTHED_USER
    }
}

export function handleLogoutAction(){
    return (dispatch) =>{
        return logoutRequestAPI().then((response)=>{
            dispatch(performLogout())
            dispatch(push('/'))
        }).catch((error)=> dispatch(setError(error.message)))
    }
}

export function handleLoginAction(userEmails,type){
    return (dispatch) =>{
        return loginRequestAPI(userEmails,type).then((response)=>{
            if (response.message) {
                dispatch(setError(response.message))
            }else if (response.error && response.error.message)    {
                dispatch(setError(response.error.message))
            }else {
                dispatch(setAuthedUser(response))
                dispatch(push('/'))
            }
        }).catch((error)=> dispatch(setError(error.message)))
    }
}