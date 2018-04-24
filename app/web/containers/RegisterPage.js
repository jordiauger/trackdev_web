import React from 'react';
import {Col, Row} from 'reactstrap'
import PropTypes from 'prop-types';
import RegisterForm from '../../components/RegisterForm';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../actions/registerActions'

class RegisterPage extends React.Component{
    /*constructor(props){
        super(props);
    }*/
    render() {
        const { userRegisterRequest } = this.props;
        return (
            <Row>
                <Col md={4} mdOffset={4}>
                    <RegisterForm
                        userRegisterRequest={userRegisterRequest}
                        token={this.props.match.params["token"]}
                    />
                </Col>
            </Row>
        )
    }
}

RegisterPage.propTypes = {
    userRegisterRequest: PropTypes.func.isRequired
    //token: PropTypes.string.isRequired
}

export default connect(null, {userRegisterRequest})(RegisterPage);