import React from 'react'
import UserList from './UserList'
import { View, Text, TextInput, Button, Picker } from 'react-native'
import PropTypes from 'prop-types'
import {FormStyles} from '../native/styles/nativeStyles'
import {connect} from 'react-redux'
import { handleReceiveDataCourses } from '../actions/courses'

function CourseItem(props){
    console.log(props);
    return (<View >
        <Text>{course.code}</Text>
        <Text>{course.name}</Text>
        <Button onPress={this.editCourse(course.id)} title="Editar">
        </Button>
        <Button onPress={this.deleteCourse(course.id)} title="Eliminar">
        </Button>
    </View>)
}


function editCourse(id){
    console.log("edit "+id)
}

function deleteCourse(id){
    console.log("delete "+id)
}


class CoursesList extends React.Component {
    render() {
        const { course } = this.props
        return (
            <View>
                <View>
                  {Object.keys(course).map((key,index)=> <CourseItem key={adminPanelUsers[key].code} course={course} />)}
                </View>
            </View>
        )
    }
}

function mapStateToProps ({course}){
    return {
        course
    }
}

export default connect(mapStateToProps)(CoursesList);