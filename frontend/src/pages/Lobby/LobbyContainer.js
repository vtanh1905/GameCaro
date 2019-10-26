import React from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';
// import * as actions from '../actions/index';

const LoginContainer = props => {
  const { user } = props;

  return (
    <div>
      <Lobby user={user} />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(LoginContainer);
