import React from 'react';
import { View } from 'react-native'
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginActions'

class LoginPage extends React.Component{
  render() {
    const { userLoginRequest } = this.props;
    return (
      <View>
          <LoginForm userLoginRequest={userLoginRequest} />
      </View>
    )
  }
}

LoginPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

export default connect(null, {userLoginRequest})(LoginPage);