import {SET_AUTHED_USER, LOGOUT_AUTHED_USER} from '../constants/Constants'
import {loginRequestAPI, logoutRequestAPI} from '../utils/api'

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
        })
    }
}

export function handleLoginAction(userEmails,type){
    return (dispatch) =>{
        return loginRequestAPI(userEmails,type).then((response)=>{
            dispatch(setAuthedUser(response))
        })
    }
}