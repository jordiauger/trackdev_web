import {SELECT_COURSE, UNSET_COURSE} from '../constants/Constants'


export function setSelectedCourse(course) {
    return {
        type: SELECT_COURSE,
        selectedCourse:course
    }
}


export function unsetSelectedCourse() {
    return {
        type: UNSET_COURSE
    }
}
