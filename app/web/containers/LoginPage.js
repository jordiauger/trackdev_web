import React from 'react';
import {Col, Row} from 'reactstrap'
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {connect} from 'react-redux';

class LoginPage extends React.Component {
  render() {
    return (
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <LoginForm />
        </Col>
      </Row>
    )
  }
}


export default connect()(LoginPage);