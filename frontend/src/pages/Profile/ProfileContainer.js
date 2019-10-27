import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as actions from 'tools/redux/actions';

export class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.props.handleGetUserFromToken();
  }

  render() {
    const { user, errorProfile, handleChangeNotifyError } = this.props;

    return (
      <div>
        <Profile
          user={user}
          errorProfile={errorProfile}
          handleChangeNotifyError={handleChangeNotifyError}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errorProfile: state.notify.errorProfile
});

const mapDispatchToProps = dispatch => {
  return {
    handleGetUserFromToken: () => {
      return dispatch(actions.getUserFromToken());
    },

    handleChangeNotifyError: msg => {
      return dispatch(actions.changeNotifyErrorProfile(msg));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
