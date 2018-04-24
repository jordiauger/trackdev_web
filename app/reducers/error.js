import { REQUEST_ERROR, REMOVE_ERROR } from '../constants/Constants'

export default function error (state = null, action) {
    switch (action.type) {
        case REQUEST_ERROR :
            return action.message
        case REMOVE_ERROR:
            return null
        default :
            return state
    }
}