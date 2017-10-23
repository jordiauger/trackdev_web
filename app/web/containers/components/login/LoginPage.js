import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../../../actions/loginActions' 

class LoginPage extends React.Component{
    render(){
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
    userLoginRequest: React.PropTypes.func.isRequired
}

export default connect(null,userLoginRequest)(LoginPage);