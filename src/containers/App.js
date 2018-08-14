import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  login,
  logout,
  loginSuccess,
  loginError,
  getBitcoinStats,
  getBitcoinStatsSuccess,
  getBitcoinStatsError,
  getExchangeRates,
  getExchangeRatesSuccess,
  getExchangeRatesError,
  getBitcoinAddresses,
  getBitcoinAddressesSuccess,
  getBitcoinAddressesError,
  addBitcoinAddress
} from '../actions/';
import Main from '../components/App';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    const {actions, user, bitcoin, colors} = this.props;
    return (
      <Main
        actions={actions}
        user={user}
        bitcoin={bitcoin}
        colors={colors}/>
    );
  }
}
App.propTypes = {
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    loginError: PropTypes.func.isRequired,
    getBitcoinStats: PropTypes.func.isRequired,
    getBitcoinStatsSuccess: PropTypes.func.isRequired,
    getBitcoinStatsError: PropTypes.func.isRequired,
    getExchangeRates: PropTypes.func.isRequired,
    getExchangeRatesSuccess: PropTypes.func.isRequired,
    getExchangeRatesError: PropTypes.func.isRequired,
    getBitcoinAddresses: PropTypes.func.isRequired,
    getBitcoinAddressesSuccess: PropTypes.func.isRequired,
    getBitcoinAddressesError: PropTypes.func.isRequired,
    addBitcoinAddress: PropTypes.func.isRequired
  }),
  user: PropTypes.shape({}),
  bitcoin: PropTypes.shape({}),
  colors: PropTypes.shape({})
};
function mapStateToProps(state) {
  const props = {
    user: state.user,
    bitcoin: state.bitcoin,
    colors: state.colors
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    login,
    logout,
    loginSuccess,
    loginError,
    getBitcoinStats,
    getBitcoinStatsSuccess,
    getBitcoinStatsError,
    getExchangeRates,
    getExchangeRatesSuccess,
    getExchangeRatesError,
    getBitcoinAddresses,
    getBitcoinAddressesSuccess,
    getBitcoinAddressesError,
    addBitcoinAddress
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
