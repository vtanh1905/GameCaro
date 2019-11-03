import React from 'react';

const BoardHeader = props => {
  const { handleResetBoard } = props;

  return (
    <div className="card-header flex">
      <button
        type="button"
        className="btn btn-danger float-left flex-center"
        onClick={() => {
          handleResetBoard();
          // history.push('/');
        }}
      >
        Xin Thua
      </button>
      <button
        type="button"
        className="btn btn-info float-left flex-center ml-2"
        onClick={() => {
          handleResetBoard();
          // history.push('/');
        }}
      >
        Xin Hòa
      </button>
      <button
        type="button"
        className="btn btn-primary float-right flex-center ml-2"
        onClick={() => {
          handleResetBoard();
          // history.push('/');
        }}
      >
        Đi lại
      </button>
      <div className="h2">Caro</div>
    </div>
  );
};

export default BoardHeader;
