import React from 'react';
import { View, Button, TextInput } from 'react-native'
import PropTypes from 'prop-types';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            pwd:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(key, value) {
        this.setState(Object.assign(
          {},
          this.state,
          { [key]: value }))
    }

    onSubmit() {
        this.props.userLoginRequest(this.state).then(
            ()=>{},
            (data)=>this.setState({errors:data})
        );
        console.log(this.state);
    }

    render() {
        return(
          <View>
            <TextInput
              onChangeText={(text) => this.onChange('username', text)}
              value={this.state.username}
            />
            <TextInput
              onChangeText={(text) => this.onChange('pwd', text)}
              value={this.state.pwd}
            />
              <Button
                onPress={this.onSubmit}
                title="Log in"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
          </View>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
}


export default LoginForm;