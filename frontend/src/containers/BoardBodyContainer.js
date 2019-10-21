import React from 'react';
import { connect } from 'react-redux';
import BoardBody from '../components/BoardBody';
import * as actions from '../actions/index';

const BoardBodyContainer = props => {
  const { caro , handleClickSquare, handleResetBoard} = props;

  return (
    <div>
      <BoardBody
        board={caro.board}
        namePlayer1={caro.namePlayer1}
        namePlayer2={caro.namePlayer2}
        turnPlayer1={caro.turnPlayer1}
        showModal={caro.showModal}
        lineWin={caro.lineWin}
        handleClickSquare={handleClickSquare}
        handleResetBoard={handleResetBoard}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  caro: state.caro
});

const mapDispatchToProps = dispatch => {
  return {
    handleClickSquare: (i, j) => {
      dispatch(actions.clickQuare(i, j));
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
