import React from 'react';
import BoardHeaderContainer from '../containers/BoardHeaderContainer';
import BoardBodyContainer from '../containers/BoardBodyContainer';

const Board = () => {
  return (
    <div className="card text-center">
      <BoardHeaderContainer />
      <BoardBodyContainer />
    </div>
  );
};

export default Board;
