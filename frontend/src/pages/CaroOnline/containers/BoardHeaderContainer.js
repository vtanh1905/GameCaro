import React from 'react';
import { connect } from 'react-redux';
import BoardHeader from '../components/BoardHeader';
import * as actions from 'tools/redux/actions';
import { useHistory } from 'react-router-dom';

const BoardHeaderContainer = props => {
  let history = useHistory();
  const { io, user, competitor, handleResetBoard, handleUndo, undo } = props;

  if (competitor === null) {
    history.push('/');
    return <></>;
  }

  return (
    <div>
      <BoardHeader
        io={io}
        user={user}
        competitor={competitor}
        handleResetBoard={handleResetBoard}
        handleUndo={handleUndo}
        undo={undo}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  io: state.io,
  user: state.user,
  competitor: state.competitor,
  undo: state.undo
});

const mapDispatchToProps = dispatch => {
  return {
    handleResetBoard: () => {
      dispatch(actions.resetBoardOnline());
    },
    handleUndo: () => {
      dispatch(actions.backBoardOnline());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardHeaderContainer);
