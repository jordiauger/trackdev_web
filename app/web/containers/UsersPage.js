import React from 'react';
import UserList from '../../components/UserList';
import { View, Text } from 'react-native';
import {FormStyles} from '../../native/styles/nativeStyles';


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

function fetchUsers(){
    return fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        return response.json();
    })
}

class UsersPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected : 'All',
            users:[]
        };
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        //Ajax requests
        fetchUsers().then((response)=>{
            this.setState(function(){
                return{
                    users:response
                }
            })
        })
    }

    update(opt){
        this.setState(function(){
            return{
                selected : opt
            }
        })
    }

    render() {
        var filters = ['All','Administrators','Professors','Students'];
        return (
            <View  style={FormStyles.mainDiv}>
                <Text>Users </Text>
                <ListFilter
                    selected = {this.state.selected}
                    update = {this.update}
                    options = {filters} />
                <UserList users={this.state.users} />
            </View>
        )
    }
}

export default UsersPage;