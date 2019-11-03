import React from 'react';
import { connect } from 'react-redux';
import BoardBody from '../components/BoardBody';
import * as actions from 'tools/redux/actions';
import { useHistory } from 'react-router-dom';

const BoardBodyContainer = props => {
  let history = useHistory();
  const {
    caro,
    user,
    competitor,
    io,
    handleDrawCharSquare,
    handleResetBoard
  } = props;

  if (competitor === null) {
    history.push('/');
    return <></>;
  }

  return (
    <div>
      <BoardBody
        board={caro.board}
        turnPlayer1={caro.turnPlayer1}
        showModal={caro.showModal}
        lineWin={caro.lineWin}
        user={user}
        competitor={competitor}
        io={io}
        handleDrawCharSquare={handleDrawCharSquare}
        handleResetBoard={handleResetBoard}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  caro: state.caroOnline,
  user: state.user,
  competitor: state.competitor,
  io: state.io
});

const mapDispatchToProps = dispatch => {
  return {
    handleDrawCharSquare: (i, j, char) => {
      dispatch(actions.drawCharSquare(i, j, char));
    },

    handleResetBoard: () => {
      dispatch(actions.resetBoardOnline());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBodyContainer);
