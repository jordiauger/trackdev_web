import React from 'react'
import { View, Text, TextInput, Button, Picker } from 'react-native'
import PropTypes from 'prop-types'
import {FormStyles} from '../native/styles/nativeStyles'
import {connect} from 'react-redux'
import { handleSaveCourse, handleUpdateCourse} from '../actions/courses'
import { unsetSelectedCourse } from '../actions/selectedCourse'


class CourseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            code:'',
            credits:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillMount(){
        if (this.props.selectedCourse!==null)
            this.updateState(this.props.selectedCourse);
    }

    onChange(key, value) {
        this.setState(Object.assign(
            {},
            this.state,
            { [key]: value }))
    }

    onSubmit() {
        if (this.state.id ==''){
            this.props.dispatch(handleSaveCourse(this.state))
        }else{
            this.props.dispatch(handleUpdateCourse(this.state))
        }
    }

    onCancel(){
        if (this.state.id ==''){
            this.props.onCancel();
        }else{
            this.props.dispatch(unsetSelectedCourse())
        }
    }

    updateState(selectedCourse){
        this.setState(Object.assign(
            {},
            this.state,
            selectedCourse))
    }


    render() {
        return(
            <View style={FormStyles.mainDiv}>
                <Text style={FormStyles.titleBig}>Afegir Curs</Text>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Nom</Text>
                    <TextInput
                        onChangeText={(text) => this.onChange('name', text)}
                        style={FormStyles.input}
                        value={this.state.name}
                    />
                </View>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Codi curs</Text>
                    <TextInput
                        onChangeText={(text) => this.onChange('code', text)}
                        style={FormStyles.input}
                        value={this.state.code}
                    />
                </View>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Credits</Text>
                    <TextInput
                        onChangeText={(text) => this.onChange('credits', text)}
                        style={FormStyles.input}
                        value={this.state.credits}
                    />
                </View>
                <Button onPress={this.onSubmit} title="Save">
                </Button>
                <Button onPress={this.onCancel} title="Cancel">
                </Button>
            </View>
        );
    }

}

function mapStateToProps ({selectedCourse}){
    return {
        selectedCourse
    }
}



export default connect(mapStateToProps)(CourseForm);