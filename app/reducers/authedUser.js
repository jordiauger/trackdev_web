import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from '../constants/Constants'

export default function authedUser (state = {
    id:1,
    name:"admin1",
    type:1
}, action) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.user
        case LOGOUT_AUTHED_USER:
            return null
        default :
            return state
    }
}