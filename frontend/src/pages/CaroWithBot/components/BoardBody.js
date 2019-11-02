import React from 'react';
import InfoPlayer from './InfoPlayer';
import Square from './Square';
import Notify from './Notify';

const BoardBody = props => {
  const {
    board,
    turnPlayer1,
    showModal,
    handleClickSquare,
    user,
    handleResetBoard
  } = props;

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
          <InfoPlayer
            isFirstPlay
            name={user.fullname}
            avatarURL={
              user.avatarURL === '' ? '/images/avatar.jpg' : user.avatarURL
            }
            turn={turnPlayer1}
          />
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
          <InfoPlayer isFirstPlay={false} name="AlphaGo" turn={!turnPlayer1} />
        </div>
      </div>
      <Notify
        show={showModal}
        isPlayer1Win={!turnPlayer1}
        handleResetBoard={handleResetBoard}
        userName={user.fullname}
        botName={'AlphaGo'}
      />
    </div>
  );
};

export default BoardBody;
