import { combineReducers } from 'redux'
import adminPanelUsers from './adminPanelUsers'
import course from './course'
import authedUser from './authedUser'
import error from './error'
import selectedCourse from './selectedCourse'


export default combineReducers({
    adminPanelUsers,
    course,
    selectedCourse,
    authedUser,
    error
})