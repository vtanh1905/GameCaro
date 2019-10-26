import React from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';
import * as actions from 'tools/redux/actions';

// const LobbyContainer = props => {
//   const { user } = props;

//   return (
//     <div>
//       <Lobby user={user} />
//     </div>
//   );
// };

export class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.props.handleGetUserFromToken();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Lobby user={user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    handleGetUserFromToken: () => {
      return dispatch(actions.getUserFromToken());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);
