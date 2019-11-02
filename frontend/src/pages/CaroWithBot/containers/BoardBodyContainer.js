import React from 'react';
import { connect } from 'react-redux';
import BoardBody from '../components/BoardBody';
import * as actions from 'tools/redux/actions';
import { delay } from 'q';

const BoardBodyContainer = props => {
  const { caro, handleClickSquare, handleResetBoard, user } = props;

  return (
    <div>
      <BoardBody
        board={caro.board}
        turnPlayer1={caro.turnPlayer1}
        showModal={caro.showModal}
        lineWin={caro.lineWin}
        handleClickSquare={handleClickSquare}
        handleResetBoard={handleResetBoard}
        user={user}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  caro: state.caro,
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClickSquare: async (i, j) => {
      //Người Đánh
      dispatch(actions.userClickQuare(i, j));
      await delay(100, 100);
      //Máy Đánh
      dispatch(actions.botClickQuare());
    },
    handleResetBoard: () => {
      dispatch(actions.resetBoard());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBodyContainer);
