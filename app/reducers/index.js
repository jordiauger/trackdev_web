import { combineReducers } from 'redux'
import adminPanelUsers from './adminPanelUsers'
import course from './course'


export default combineReducers({
    adminPanelUsers,
    course
})