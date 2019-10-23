import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register';
import * as actions from '../actions/index';

const RegisterContainer = props => {
  const { handleRegister, errorRegister, user } = props;

  return (
    <div>
      <Register
        errorRegister={errorRegister}
        handleRegister={handleRegister}
        user={user}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  errorRegister: state.notify.errorRegister,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    handleRegister: user => {
      return dispatch(actions.registerRequest(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
