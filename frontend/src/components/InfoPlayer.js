import React from 'react';

const InfoPlayer = props => {
  const { isFirstPlay, name, turn } = props;
  return (
    <div>
      <div className="h3" />
      <div className={`btn mt-5 ${turn ? 'btn-success' : 'btn-secondary'}`}>
        {name}
      </div>
      <div
        className={isFirstPlay ? 'text-danger' : 'text-info'}
        style={{ fontSize: '100px' }}
      >
        {isFirstPlay ? 'X' : 'O'}
      </div>
    </div>
  );
};

export default InfoPlayer;
