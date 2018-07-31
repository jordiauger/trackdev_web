import React from 'react';
import {Col, Row, Button, CardTitle} from 'reactstrap'
//import UsersComponent from '../../components/UsersComponent';
import { connect } from 'react-redux';
import {handleReceiveDataCourses} from '../../actions/courses';
import CourseForm from '../../components/CourseForm';
import CoursesList from '../../components/CoursesList';
import {FormStyles} from "../../native/styles/nativeStyles";

class CoursesPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showForm: false
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(handleReceiveDataCourses());
    }

    toggleForm(){
        this.setState(Object.assign(
            {},
            this.state,
            { "showForm": true }))
    }

    onCancel(){
        this.setState(Object.assign(
            {},
            this.state,
            { "showForm": false }))
    }

    render() {
        console.log('Props',this.props);
        const {editForm} = this.props
        return (
            <div>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <CardTitle style={FormStyles.titleBig}>Administracio de cursos </CardTitle>
                        {
                        this.state.showForm || editForm ?
                            <CourseForm onCancel={this.onCancel}/>
                            :
                            <CoursesList />
                        }
                    </Col>
                    {
                        !this.state.showForm && !editForm ?
                    <Col md={{ size: 8, offset: 2 }}>
                        <Button onClick={this.toggleForm}>Add course</Button>
                    </Col>
                        : null
                    }
                </Row>
            </div>
        )
    }
}


function mapStateToProps ({selectedCourse}){
    return {
        editForm : selectedCourse !== null
    }
}

export default connect(mapStateToProps)(CoursesPage)