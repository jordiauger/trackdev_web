import React from 'react'
import UserList from './UserList'
import { View, Text, TextInput, Button, Picker } from 'react-native'
import PropTypes from 'prop-types'
import {FormStyles} from '../native/styles/nativeStyles'
import {connect} from 'react-redux'
import { handleReceiveDataCourses } from '../actions/courses'
import { setSelectedCourse } from '../actions/selectedCourse';

function CourseItem(props){
    console.log(props);
    return (<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
        <Text style={{ flex: 1, alignSelf: 'stretch' }} >{props.course.code}</Text>
        <Text style={{ flex: 4, alignSelf: 'stretch' }} >{props.course.name}</Text>
        <View  style={{ flex: 1, alignSelf: 'stretch' }}>
            <Button onPress={()=> props.editCourse(props.course)} title="Editar">
            </Button>
        </View>
        <View  style={{ flex: 1, alignSelf: 'stretch' }}>
            <Button onPress={()=> props.deleteCourse(props.course)} title="Eliminar">
            </Button>
        </View>
    </View>)
}


class CoursesList extends React.Component {

    constructor(props){
        super(props);
        this.editCourse = this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    editCourse(course){
        this.props.dispatch(setSelectedCourse(course));
    }

    deleteCourse(course){
        console.log("delete "+course.id)
    }

    render() {
        const { course } = this.props
        return (
            <View>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <Text style={{ flex: 1, alignSelf: 'stretch' }} >Codi</Text>
                    <Text style={{ flex: 4, alignSelf: 'stretch' }} >Nom</Text>
                    <Text style={{ flex: 2, alignSelf: 'stretch' }} >Accions</Text>
                </View>
                <View>
                      {Object.keys(course).map((key,index)=> <CourseItem key={course[key].id} course={course[key]} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />)}
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