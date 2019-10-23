import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions/index';

const LoginContainer = props => {
  const { handleLogin, errorLogin, user } = props;

  return (
    <div>
      <Login handleLogin={handleLogin} errorLogin={errorLogin} user={user} />
    </div>
  );
};

const mapStateToProps = state => ({
  errorLogin: state.notify.errorLogin,
  user: state.user
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
