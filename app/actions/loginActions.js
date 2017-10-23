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

export function userLoginRequest(userData){
    return dispatch =>{
        dispatch(requestLogin(userData))
        return fetch("http://localhost:3000/Users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            response => response.json(),
            error => console.log('An error occured.', error)
        })
        .then((recurso) => {
            dispatch(receiveLogin(userData,recurso))
        })
        
    }
}