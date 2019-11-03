import React, { useState } from 'react';
import InfoPlayer from './InfoPlayer';
import Square from './Square';
import Notify from './Notify';
import { useHistory } from 'react-router-dom';

const BoardBody = props => {
  let history = useHistory();
  const {
    board,
    showModal,
    user,
    competitor,
    io,
    handleDrawCharSquare,
    handleResetBoard
  } = props;

  const [myTurn, setMyTurn] = useState(competitor.isHost ? false : true);
  const [competitorExit, setCompetitorExit] = useState(false);

  const handleClickSquare = (i, j) => {
    const myChar = competitor.isHost ? 'O' : 'X';

    if (myTurn) {
      io.emit('CLIENT_SEND_POSITION_BOARD', { user, i, j });
      handleDrawCharSquare(i, j, myChar);
      setMyTurn(false);
    }
  };

  io.on('SERVER_SEND_POSITION_BOARD_COMPETITOR', req => {
    const yourChar = competitor.isHost ? 'X' : 'O';
    if (!myTurn) {
      handleDrawCharSquare(req.i, req.j, yourChar);
    }
    io.removeListener('SERVER_SEND_POSITION_BOARD_COMPETITOR');
    setMyTurn(true);
  });

  // Đối thủ bỏ ket nối
  io.on('SERVER_SEND_COMPETITOR_EXIT', req => {
    console.log(req);
    setCompetitorExit(true);
  });

  const handleBackToLobby = () => {
    handleResetBoard();
    history.push('/');
  };

  const renderBoard = matrix => {
    return matrix.map((row, i) => {
      return (
        <tr key={String(i)}>
          <td className="font-weight-bold">{i + 1}</td>
          {row.map((col, j) => {
            if (props.lineWin.some(item => item.row === i && item.col === j)) {
              return (
                <Square
                  key={String(i + j + col)}
                  indexRow={i}
                  indexCol={j}
                  vert
                  hori
                  handleClickSquare={handleClickSquare}
                  highline
                >
                  {col}
                </Square>
              );
            }
            return (
              <Square
                key={String(i + j + col)}
                indexRow={i}
                indexCol={j}
                vert
                hori
                handleClickSquare={handleClickSquare}
                highline={false}
              >
                {col}
              </Square>
            );
          })}
          <td className="font-weight-bold">{i + 1}</td>
        </tr>
      );
    });
  };

  return (
    <div className="card-body">
      <div className="row">
        <div className="col-2">
          {competitor.isHost ? (
            <InfoPlayer
              isFirstPlay
              name={competitor.fullname}
              avatarURL={
                competitor.avatarURL === ''
                  ? '/images/avatar.jpg'
                  : competitor.avatarURL
              }
              turn={!myTurn}
            />
          ) : (
            <InfoPlayer
              isFirstPlay
              name={user.fullname}
              avatarURL={
                user.avatarURL === '' ? '/images/avatar.jpg' : user.avatarURL
              }
              turn={myTurn}
            />
          )}
        </div>
        <div className="col-8">
          <table>
            <tbody>
              <tr>
                <td />
                <td className="font-weight-bold">A</td>
                <td className="font-weight-bold">B</td>
                <td className="font-weight-bold">C</td>
                <td className="font-weight-bold">D</td>
                <td className="font-weight-bold">E</td>
                <td className="font-weight-bold">F</td>
                <td className="font-weight-bold">G</td>
                <td className="font-weight-bold">H</td>
                <td className="font-weight-bold">I</td>
                <td className="font-weight-bold">J</td>
                <td className="font-weight-bold">K</td>
                <td className="font-weight-bold">L</td>
                <td className="font-weight-bold">M</td>
                <td className="font-weight-bold">N</td>
                <td className="font-weight-bold">O</td>
                <td className="font-weight-bold">P</td>
                <td className="font-weight-bold">Q</td>
                <td className="font-weight-bold">R</td>
                <td className="font-weight-bold">S</td>
                <td className="font-weight-bold">T</td>
              </tr>
              {renderBoard(board)}
              <tr>
                <td />
                <td className="font-weight-bold">A</td>
                <td className="font-weight-bold">B</td>
                <td className="font-weight-bold">C</td>
                <td className="font-weight-bold">D</td>
                <td className="font-weight-bold">E</td>
                <td className="font-weight-bold">F</td>
                <td className="font-weight-bold">G</td>
                <td className="font-weight-bold">H</td>
                <td className="font-weight-bold">I</td>
                <td className="font-weight-bold">J</td>
                <td className="font-weight-bold">K</td>
                <td className="font-weight-bold">L</td>
                <td className="font-weight-bold">M</td>
                <td className="font-weight-bold">N</td>
                <td className="font-weight-bold">O</td>
                <td className="font-weight-bold">P</td>
                <td className="font-weight-bold">Q</td>
                <td className="font-weight-bold">R</td>
                <td className="font-weight-bold">S</td>
                <td className="font-weight-bold">T</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-2">
          {!competitor.isHost ? (
            <InfoPlayer
              isFirstPlay={false}
              name={competitor.fullname}
              avatarURL={
                competitor.avatarURL === ''
                  ? '/images/avatar.jpg'
                  : competitor.avatarURL
              }
              turn={!myTurn}
            />
          ) : (
            <InfoPlayer
              isFirstPlay={false}
              name={user.fullname}
              avatarURL={
                user.avatarURL === '' ? '/images/avatar.jpg' : user.avatarURL
              }
              turn={myTurn}
            />
          )}
        </div>
      </div>
      <Notify
        show={showModal}
        isPlayer1Win={myTurn}
        userName={user.fullname}
        botName={competitor.fullname}
        handleBackToLobby={handleBackToLobby}
      />
      <Notify
        show={competitorExit}
        isPlayer1Win={false}
        userName={user.fullname}
        botName={competitor.fullname}
        handleBackToLobby={handleBackToLobby}
      />
    </div>
  );
};

export default BoardBody;
