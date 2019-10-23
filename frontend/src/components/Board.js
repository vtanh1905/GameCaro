import React from 'react';
import BoardHeaderContainer from '../containers/BoardHeaderContainer';
import BoardBodyContainer from '../containers/BoardBodyContainer';
import HistoryContainer from '../containers/HistoryContainer';

const Board = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-10">
          <div className="card text-center">
            <BoardHeaderContainer />
            <BoardBodyContainer />
          </div>
        </div>
        <div className="col-2">
          <HistoryContainer />
        </div>
      </div>
    </div>
  );
};

export default Board;
