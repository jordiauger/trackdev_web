import {REQUEST_LOGIN,RECEIVE_LOGIN,ERROR_LOGIN} from '../constants/Constants.js';
function requestLogin(userData) {
  return {
    type: REQUEST_LOGIN,
    userData
  }
}

function receiveLogin(json) {
  return {
    type: RECEIVE_LOGIN,
    json
  }
}



function errorLogin(error) {
  return {
    type: ERROR_LOGIN,
    error
  }
}


export function userLoginRequest(userData){
    return dispatch => {
        dispatch(requestLogin(userData))
        return fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => dispatch(receiveLogin(response.json())),
                error => dispatch(errorLogin(error)))
    }
}