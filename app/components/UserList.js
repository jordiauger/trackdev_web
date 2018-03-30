import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import {FormStyles} from '../native/styles/nativeStyles';
import {connect} from 'react-redux';

function UserItem(props){
    console.log(props);
    return (<View >
        <Text>{props.user}</Text>
    </View>)
}

class UserList extends React.Component {
    render() {
        const { adminPanelUsers } = this.props
        return (
            <View>
                <View>
                  {Object.keys(adminPanelUsers).map((key,index)=> <UserItem key={adminPanelUsers[key].id} user={adminPanelUsers[key].email} />)}
                </View>
            </View>
        )
    }
}

function mapStateToProps ({adminPanelUsers}){
    return {
        adminPanelUsers
    }
}

/*UserList.propTypes = {
    users: PropTypes.array.isRequired
};*/

export default connect(mapStateToProps)(UserList);
