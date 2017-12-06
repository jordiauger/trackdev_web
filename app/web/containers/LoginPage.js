import React from 'react';
import {Col, Row} from 'react-bootstrap'
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {connect} from 'react-redux';
import {userLoginRequest} from '../../actions/loginActions'

class LoginPage extends React.Component {
  render() {
    const {userLoginRequest} = this.props;
    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <LoginForm userLoginRequest={userLoginRequest}/>
        </Col>
      </Row>
    )
  }
}

LoginPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

export default connect(null, {userLoginRequest})(LoginPage);