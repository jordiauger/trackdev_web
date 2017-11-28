import React from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            pwd:'',
            correu:'',
            tipus:3,
            codiUdg:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props.params);
        /*
            let token = paramToken;
            this.props.userRegisterRequest(token).then(
                ()=>{},
                (data)=>this.setState({errors:data})
            );

        */
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.props.userRegisterRequest(this.state).then(
            ()=>{},
            (data)=>this.setState({errors:data})
        );
        console.log(this.state);
    }

    render(){
        let codiUdgForm = null;
        if (this.state.tipus == 3){
            codiUdgForm = <div className="form-group">
                <label className="control-label">Codi Udg</label>
                <input
                    value={this.state.codiUdg}
                    onChange={this.onChange}
                    name="pwd"
                    className="form-control" />
        
            </div>    
        }

        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="control-label">Correu</label>
                    <input
                        value={this.state.correu}
                        name="correu"
                        className="form-control"
                        disabled />
               
                </div>
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
                {codiUdgForm}
                 <button className="btn btn-primary btn-lg">
                    Register
                </button>
            </form>
        );
        
    }
}

RegisterForm.propTypes = {
    userRegisterRequest: PropTypes.func.isRequired
}


export default RegisterForm;