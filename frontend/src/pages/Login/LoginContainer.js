import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import * as actions from 'tools/redux/actions';

const LoginContainer = props => {
  const { handleLogin, errorLogin } = props;

  return (
    <div>
      <Login handleLogin={handleLogin} errorLogin={errorLogin} />
    </div>
  );
};

const mapStateToProps = state => ({
  errorLogin: state.notify.errorLogin
});

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: user => {
      return dispatch(actions.loginRequest(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
