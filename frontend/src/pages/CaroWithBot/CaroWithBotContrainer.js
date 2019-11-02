import React, { Component } from 'react';
import { connect } from 'react-redux';
import CaroWithBot from './CaroWithBot';
import * as actions from 'tools/redux/actions';
export class CaroWithBotContrainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.props.handleGetUserFromToken();
  }

  render() {
    const { user } = this.props;
    return <CaroWithBot user={user}></CaroWithBot>;
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
)(CaroWithBotContrainer);
