import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import  Login  from './pages/Login';
import { connect } from "react-redux";
import { createAction } from './redux/actions';
import { FETCH_ADMIN_CREDENTIALS } from './redux/constants/user.constant';
import { Component } from 'react';
import UserManagement from './pages/UserManagement';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/userManagement" component={UserManagement} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getAdminCredentialsFromLocal = () => {
    const adminCredentialsStr = localStorage.getItem("adminCredentials");
    if (adminCredentialsStr) {
      this.props.dispatch(
        createAction(FETCH_ADMIN_CREDENTIALS, JSON.parse(adminCredentialsStr))
      );
    }
  };
  componentDidMount() {
    this._getAdminCredentialsFromLocal();
  }
}

export default connect()(App);
