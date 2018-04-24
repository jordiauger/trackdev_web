import {REQUEST_ERROR, REMOVE_ERROR} from '../constants/Constants'


export function setError(error){
    return {
        type: REQUEST_ERROR,
        message: error
    }
}

export function removeError(){
    return {
        type: REMOVE_ERROR
    }
}