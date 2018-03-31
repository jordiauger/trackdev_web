import {REQUEST_LOGIN,RECEIVE_LOGIN,ERROR_LOGIN} from '../constants/Constants';
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

    }
}