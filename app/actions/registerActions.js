import {REQUEST_REGISTER,RECEIVE_REGISTER,ERROR_REGISTER} from '../constants/Constants.js';
function requestRegister(userData) {
  return {
    type: REQUEST_REGISTER,
    userData
  }
}

function receiveRegister(json) {
  return {
    type: RECEIVE_REGISTER,
    json
  }
}



function errorRegister(error) {
  return {
    type: ERROR_REGISTER,
    error
  }
}


function receiveUserRegister(json) {
  return {
    type: RECEIVE_USER_REGISTER,
    json
  }
}


export function userRegisterRequest(userData){
    return dispatch => {
        dispatch(requestRegister(userData))
        return fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => dispatch(receiveRegister(response.json())),
                error => dispatch(errorRegister(error)))
    }
}

export function userRegisterGetInfo(token){
    return dispatch => {
        return fetch("http://localhost:3000/api/users/register?token="+token, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => dispatch(receiveUserRegister(response.json())),
                error => dispatch(errorRegister(error)))
    }
}