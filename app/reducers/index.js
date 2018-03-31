import { combineReducers } from 'redux'
import adminPanelUsers from './adminPanelUsers'
import course from './course'
import authedUser from './authedUser'


export default combineReducers({
    adminPanelUsers,
    course,
    authedUser
})