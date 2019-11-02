import React from 'react';
import { connect } from 'react-redux';
import BoardHeader from '../components/BoardHeader';
import * as actions from 'tools/redux/actions';

const BoardHeaderContainer = props => {
  const { handleResetBoard } = props;

  return (
    <div>
      <BoardHeader handleResetBoard={handleResetBoard} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleResetBoard: () => {
      dispatch(actions.resetBoard());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BoardHeaderContainer);
