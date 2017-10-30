export const REQUEST_LOGIN = 'REQUEST_LOGIN'
function requestLogin(userData) {
  return {
    type: REQUEST_LOGIN,
    userData
  }
}

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
function receiveLogin(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


export const ERROR_LOGIN = 'ERROR_LOGIN'
function errorLogin(error) {
  return {
    type: ERROR_LOGIN,
    error
  }
}


export function userLoginRequest(userData){
    return dispatch => {
        dispatch(requestLogin(userData))
        return fetch("http://localhost:3000/Users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => dispatch(receiveLogin(userData,response.json())),
                error => dispatch(errorLogin(error)))
    }
}