import React from 'react';

const InfoPlayer = props => {
  const { isFirstPlay, name, turn, avatarURL } = props;

  return (
    <div>
      <div className="h3" />
      <div>
        <img
          src={avatarURL ? avatarURL : '/images/bot.png'}
          alt="Avatar"
          width="150"
          height="200"
        />
      </div>
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
