import React from 'react'
import UserList from './UserList'
import { View, Text, TextInput, Button, Picker } from 'react-native'
import PropTypes from 'prop-types'
import {FormStyles} from '../native/styles/nativeStyles'
import {connect} from 'react-redux'
import { handleReceiveDataAdminPanel, handleAddUserBatch } from '../actions/adminPanel'

function ListFilter(props){
    return(
        <View>
            <View style={FormStyles.rowRapper}>
                  {props.options.map((option)=>{
                      return (<View
                          onClick={props.update.bind(null,option)}
                          style={props.selected === option ? FormStyles.highlightedOption : FormStyles.filterOption }
                          key={option}>
                          <Text>{option}</Text>
                      </View>)
                  })}
            </View>
        </View>
    )
}

class UsersComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected : 'All',
            typeUsersToAdd:"2",
            usersToAdd : ''
            //users:[]
        };
        this.update = this.update.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){
        this.props.dispatch(handleReceiveDataAdminPanel());
    }

    onChange(key, value) {
        this.setState(Object.assign(
            {},
            this.state,
            { [key]: value }))
    }

    update(opt){
        this.setState(function(){
            return{
                selected : opt
            }
        })
    }

    onSubmit() {
        this.state.usersToAdd !== "" && this.state.usersToAdd.length > 0 ? this.props.dispatch(handleAddUserBatch(this.state.usersToAdd,this.state.typeUsersToAdd)) : null
    }


    render() {
        var filters = ['All','Administrators','Professors','Students'];
        return (
            <View style={FormStyles.mainDiv}>
                <Text style={FormStyles.titleBig}>Administracio d' usuaris </Text>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Afegir usuaris</Text>
                    <View style={FormStyles.viewFlexRow}>
                        <View style={FormStyles.viewFlexInput}>
                            <TextInput
                                style={FormStyles.inputFlex}
                                value={this.state.usersToAdd}
                                onChangeText={(text) => this.onChange('usersToAdd', text)}
                            />
                        </View>
                        <View style={FormStyles.viewFlexButton}>

                            <Picker
                                selectedValue={ this.state.typeUsersToAdd }
                                onValueChange={ (value) => this.onChange('typeUsersToAdd', value) }
                                style={ FormStyles.dropdownFlex }
                            >
                                    <Picker.Item key={"2"} value={"2"} label={"Professors"} />
                                    <Picker.Item key={"3"} value={"3"} label={"Alumnes"} />
                                    <Picker.Item key={"1"} value={"1"} label={"Administradors"} />
                            </Picker>

                        </View>
                        <View style={FormStyles.viewFlexButton}>
                            <Button onPress={this.onSubmit} title="Afegir">
                            </Button>
                        </View>
                    </View>

                </View>
                <Text style={FormStyles.title}>Llistat d'Usuaris</Text>
                <ListFilter
                    selected = {this.state.selected}
                    update = {this.update}
                    options = {filters} />
                <UserList  />

            </View>
        )
    }
}


function mapStateToProps ({adminPanelUsers}){
    return {
        adminPanelUsers
    }
}

export default connect(mapStateToProps)(UsersComponent);