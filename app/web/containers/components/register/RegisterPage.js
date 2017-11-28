import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../../../actions/registerActions' 

class RegisterPage extends React.Component{
    render() {
        const { userRegisterRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <RegisterForm userRegisterRequest={userRegisterRequest} />
                </div>
            </div>
        )
    }
}

RegisterPage.propTypes = {
    userRegisterRequest: PropTypes.func.isRequired
}

export default connect(null, {userRegisterRequest})(RegisterPage);