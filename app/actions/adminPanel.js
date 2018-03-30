import {ADD_USER,UPDATE_USER,DELETE_USER, RECEIVE_DATA_ADMIN_PANEL} from '../constants/constants.js'
import {fetchUsers,addUsersByEmailAPI} from '../utils/api'

function addUserAction(user) {
    return {
        type:ADD_USER,
        user
    }
}


function updateUserAction(user) {
    return {
        type:UPDATE_USER,
        user
    }
}


function deleteUserAction(id) {
    return {
        type:DELETE_USER,
        id
    }
}

export function receiveDataAdminPanel(users){
    return {
        type: RECEIVE_DATA_ADMIN_PANEL,
        users
    }
}


export function handleReceiveDataAdminPanel(){
    return (dispatch) => {
        return fetchUsers()
            .then((response)=>{
                dispatch(receiveDataAdminPanel(response))
            })
    }
}



export function handleAddUserBatch(userEmails,type){
    return (dispatch) =>{
        return addUsersByEmailAPI(userEmails,type).then((response)=>{
            dispatch(handleReceiveDataAdminPanel())
        })
    }
}
