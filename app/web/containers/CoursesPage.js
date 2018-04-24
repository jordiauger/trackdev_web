import React from 'react';
import {Col, Row} from 'reactstrap'
//import UsersComponent from '../../components/UsersComponent';
import { connect } from 'react-redux';
import {handleReceiveDataCourses} from '../../actions/courses'

class CoursesPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showForm: false
        }
    }

    componentDidMount(){
        this.props.dispatch(handleReceiveDataCourses());
    }

    toggleForm(){
        this.setState(Object.assign(
            {},
            this.state,
            { "showForm": !this.state.showForm }))
    }

    render() {
        const {editForm} = this.props
        return (
            <Row>
                <Button onclick={this.toggleForm()}>Add course</Button>
                <Col md={8} mdOffset={2}>
                    {
                    this.state.showForm || editForm ?
                        <CoursesForm></CoursesForm>
                        :
                        <CoursesList></CoursesList>
                    }
                </Col>
            </Row>
        )
    }
}


function mapStateToProps ({selectedCourse}){
    return {
        editForm : selectedCourse !== null
    }
}

export default connect(mapStateToProps)(CoursesPage)