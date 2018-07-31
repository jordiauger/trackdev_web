import {ADD_COURSE,UPDATE_COURSE,DELETE_COURSE, RECEIVE_DATA_COURSES, UNSET_COURSE} from '../constants/Constants'
import {fetchCourses,addCourseAPI, updateCourseAPI,deleteCourseAPI} from '../utils/api'
import {setError} from './error'


export function addCourseAction(course){
    return {
        type: ADD_COURSE,
        course
    }
}

export function updateCourseAction(course){
    return {
        type: UPDATE_COURSE,
        course
    }
}

export function deleteCourseAction(course){
    return {
        type: DELETE_COURSE,
        course
    }
}

export function receiveDataCourses(courses){
    return {
        type: RECEIVE_DATA_COURSES,
        courses
    }
}

export function unsetCourseAction(){
    return {
        type: UNSET_COURSE
    }
}


export function handleReceiveDataCourses(){
    return (dispatch) => {
        return fetchCourses()
            .then((response)=>{
                dispatch(receiveDataCourses(response))
            }).catch((error)=> dispatch(setError(error.message)))
    }
}

export function handleSaveCourse(course){
    return (dispatch) =>{
        return addCourseAPI(course).then((response)=>{
            dispatch(unsetCourseAction())
            dispatch(handleReceiveDataCourses())

        }).catch((error)=> dispatch(setError(error.message)))
    }
}

export function handleUpdateCourse(course){
    return (dispatch) =>{
        return updateCourseAPI(course).then((response)=>{
            dispatch(unsetCourseAction())
            dispatch(handleReceiveDataCourses())

        }).catch((error)=> dispatch(setError(error.message)))
    }
}

export function handleDeleteCourse(course){
    return (dispatch) =>{
        return deleteCourseAPI(course).then((response)=>{
            dispatch(handleReceiveDataCourses())
        }).catch((error)=> dispatch(setError(error.message)))
    }
}