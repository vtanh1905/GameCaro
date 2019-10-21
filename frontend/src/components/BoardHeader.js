import React from 'react';

const BoardHeader = props => {
  const { handleResetBoard } = props;

  return (
    <div className="card-header">
      <button type="button" className="close" onClick={handleResetBoard}>
        <span>↺</span>
      </button>
      <div className="h1">Caro</div>
    </div>
  );
};

export default BoardHeader;
