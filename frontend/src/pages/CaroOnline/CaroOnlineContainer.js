import React, { Component } from 'react';
import { connect } from 'react-redux';
import CaroOnline from './CaroOnline';
import * as actions from 'tools/redux/actions';

export class CaroOnlineContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.props.handleGetUserFromToken();
  }

  render() {
    const { user } = this.props;
    return <CaroOnline user={user}></CaroOnline>;
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
)(CaroOnlineContainer);
