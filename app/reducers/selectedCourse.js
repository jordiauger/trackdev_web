import {SELECT_COURSE,UNSET_COURSE} from '../constants/Constants'

const selectedCourse = (state = {},action) => {
    switch(action.type){
        case SELECT_COURSE:
            return action.course;
        case UNSET_COURSE:
            return null;
        default:
            return {
                ...state
            }
        }
}

export default selectedCourse;