import {ADD_USER,UPDATE_USER,DELETE_USER, RECEIVE_DATA_ADMIN_PANEL} from '../constants/Constants.js'

const adminPanelUsers = (state = {},action) => {
    switch(action.type){
        case ADD_USER:
            return state.concat([action.user]);
        case UPDATE_USER:
            return state.map((user) => user.id !== action.user.id ? user :
                Object.assign({}, user, action.user));
        case DELETE_USER:
            return state.filter((user) => user.id !== action.id);
        case RECEIVE_DATA_ADMIN_PANEL :
            return {
                ...state,
                ...action.users
            }
        default:
            return {
            ...state
            }
    }
}

export default adminPanelUsers;