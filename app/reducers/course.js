import {ADD_COURSE,UPDATE_COURSE,DELETE_COURSE, RECEIVE_DATA_COURSE} from '../constants/Constants'

const course = (state = {},action) => {
    switch(action.type){
        case ADD_COURSE:
            return state.concat([action.course]);
        case UPDATE_COURSE:
            return state.map((course) => course.id !== action.course.id ? course :
                Object.assign({}, course, action.course));
        case DELETE_COURSE:
            return state.filter((course) => course.id !== action.id);
        case RECEIVE_DATA_COURSE :
            return {
                ...state,
                ...action.courses
            }
        default:
            return {
                ...state
            }
    }
}

export default course;