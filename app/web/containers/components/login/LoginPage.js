import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../../../components/LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../../../actions/loginActions' 

class LoginPage extends React.Component{
    render() {
        const { userLoginRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm userLoginRequest={userLoginRequest} />
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
}

export default connect(null, {userLoginRequest})(LoginPage);