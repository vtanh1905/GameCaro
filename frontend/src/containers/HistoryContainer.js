import React from 'react';
import { connect } from 'react-redux';
import History from '../components/History';
import * as actions from '../actions/index';

const BoardHeaderContainer = props => {
  const { caro, handleBackBoard, handleOrderHistory } = props;

  return (
    <div>
      <History
        namePlayer1={caro.namePlayer1}
        namePlayer2={caro.namePlayer2}
        historyBoard={caro.historyBoard}
        indexCurrent={caro.indexCurrent}
        orderHistory={caro.orderHistory}
        handleBackBoard={handleBackBoard}
        handleOrderHistory={handleOrderHistory}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  caro: state.caro
});

const mapDispatchToProps = dispatch => {
  return {
    handleBackBoard: index => {
      dispatch(actions.backBoard(index));
    },

    handleOrderHistory: () => {
      dispatch(actions.orderHistory());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardHeaderContainer);
