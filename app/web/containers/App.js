import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Main from './Main';
import {connect} from 'react-redux';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UsersPage from './UsersPage';
import CoursesPage from './CoursesPage';
import { createHistory } from 'history';
import { View } from 'react-native'
import ErrorComponent from '../../components/ErrorComponent'

class RootApp extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Route exact path="/" component={Main}/>
            {
                this.props.notLogged === true ? <View><Route path="/login" component={LoginPage}/>
                    <Route path='/register/:token' component={RegisterPage}/></View>
                    :
                    <View>
                    <Route path="/users" component={UsersPage} />
                    <Route path="/courses" component={CoursesPage} />
                    </View>
            }
              <ErrorComponent />
          </div>

        </BrowserRouter>

    );
  }
}

function mapStateToProps ({ authedUser }) {
    return {
        notLogged: authedUser === null
    }
}

export default connect(mapStateToProps)(RootApp)