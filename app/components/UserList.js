import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import {FormStyles} from '../native/styles/nativeStyles';

function UserItem(props){
    console.log(props);
    return (<View >
        <Text>{props.user}</Text>
    </View>)
}

class UserList extends React.Component {
    render() {
        return (
            <View>
                <View>
                  {this.props.users.map((user)=> <UserItem key={user.id} user={user.email} />)}
                </View>
            </View>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;