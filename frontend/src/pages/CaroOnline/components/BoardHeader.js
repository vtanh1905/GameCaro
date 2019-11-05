import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Notify from './Notify';
import NotifyYesNo from './NotifyYesNo';

const BoardHeader = props => {
  let history = useHistory();
  const { io, user, competitor, handleResetBoard, undo } = props;
  const [competitorGiveUp, setCompetitorGiveUp] = useState(false);
  const [competitorAskTie, setCompetitorAskTie] = useState(false);

  io.on('SERVER_SEND_COMPETITOR_ASK_TIE', () => {
    setCompetitorAskTie(true);
  });

  io.on('SERVER_SEND_AGREE_COMPETITOR_ASK_TIE', () => {
    handleResetBoard();
    history.push('/');
  });

  return (
    <div className="card-header flex">
      <button
        type="button"
        className="btn btn-danger float-left flex-center"
        onClick={() => {
          io.emit('CLIENT_SEND_GIVE_UP', { user });
          setCompetitorGiveUp(true);
        }}
      >
        Đầu hàng
      </button>
      <button
        type="button"
        className="btn btn-info float-left flex-center ml-2"
        onClick={() => {
          io.emit('CLIENT_SEND_ASK_TIE', { user });
          //handleResetBoard();
          // history.push('/');
        }}
      >
        Xin Hòa
      </button>
      <button
        type="button"
        className="btn btn-primary float-right flex-center ml-2"
        onClick={() => {
          io.emit('CLIENT_SEND_ASK_UNDO', { user });
        }}
        disabled={undo}
      >
        Đi lại
      </button>
      <div className="h2">Caro</div>
      <Notify
        show={competitorGiveUp}
        isPlayer1Win={false}
        userName={competitor.fullname}
        handleBackToLobby={() => {
          handleResetBoard();
          history.push('/');
        }}
      />

      <NotifyYesNo
        show={competitorAskTie}
        handleYes={() => {
          io.emit('CLIENT_SEND_AGREE_COMPETITOR_ASK_TIE', { user });
          handleResetBoard();
          history.push('/');
        }}
        handleNo={() => {
          setCompetitorAskTie(false);
        }}
      >
        Đối thủ xin hòa
      </NotifyYesNo>
    </div>
  );
};

export default BoardHeader;
