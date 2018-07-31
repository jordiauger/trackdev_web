import {SELECT_COURSE,UNSET_COURSE} from '../constants/Constants'

const selectedCourse = (state = null,action) => {
    switch(action.type){
        case SELECT_COURSE:
            return action.selectedCourse;
        case UNSET_COURSE:
            return null;
        default:
            return state
        }
}

export default selectedCourse;