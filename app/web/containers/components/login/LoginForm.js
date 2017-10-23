import React from 'react';

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

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        
        console.log(this.state);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.pwd}
                        onChange={this.onChange}
                        type="password"
                        name="pwd"
                        className="form-control" />
               
                </div>
                 <button className="btn btn-primary btn-lg">
                    Login
                </button>
            </form>
        );
        
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}


export default LoginForm;