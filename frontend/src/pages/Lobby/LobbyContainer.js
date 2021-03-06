import React from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';
import * as actions from 'tools/redux/actions';

export class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.props.handleGetUserFromToken();
  }

  render() {
    const { user, io, handleSaveCompetitor } = this.props;

    return (
      <div>
        <Lobby
          user={user}
          io={io}
          handleSaveCompetitor={handleSaveCompetitor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  io: state.io
});

const mapDispatchToProps = dispatch => {
  return {
    handleGetUserFromToken: () => {
      return dispatch(actions.getUserFromToken());
    },

    handleSaveCompetitor: competitor => {
      return dispatch(actions.saveCompetitor(competitor));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);
