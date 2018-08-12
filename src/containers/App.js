
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {login, logout, loginSuccess, loginError} from '../actions/';
import Main from '../components/App';

class App extends Component {
  render() {
    const {actions, user} = this.props;
    return <Main actions={actions} user={user}/>;
  }
}

App.propTypes = {
  actions: PropTypes.shape({login: PropTypes.func.isRequired, logout: PropTypes.func.isRequired, loginSuccess: PropTypes.func.isRequired, loginError: PropTypes.func.isRequired}),
  user: PropTypes.shape({})
}

function mapStateToProps(state) {
  const props = {
    user: state.user
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    login,
    logout,
    loginSuccess,
    loginError
  };
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
