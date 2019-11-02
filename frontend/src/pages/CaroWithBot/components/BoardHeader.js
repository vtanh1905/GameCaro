import React from 'react';
import { useHistory } from 'react-router-dom';

const BoardHeader = props => {
  let history = useHistory();
  const { handleResetBoard } = props;

  return (
    <div className="card-header  flex">
      <button
        type="button"
        className="btn btn-danger float-left flex-center"
        onClick={() => {
          handleResetBoard();
          history.push('/');
        }}
      >
        Thoát
      </button>
      <button
        type="button"
        className="close flex-center"
        onClick={handleResetBoard}
      >
        <span>↺</span>
      </button>
      <div className="h2">Caro</div>
    </div>
  );
};

export default BoardHeader;
