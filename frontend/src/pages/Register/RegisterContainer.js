import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import * as actions from 'tools/redux/actions';

const RegisterContainer = props => {
  const { handleRegister, errorRegister } = props;

  return (
    <div>
      <Register errorRegister={errorRegister} handleRegister={handleRegister} />
    </div>
  );
};

const mapStateToProps = state => ({
  errorRegister: state.notify.errorRegister
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
