import React from 'react';

const History = props => {
  const {
    historyBoard,
    orderHistory,
    handleOrderHistory,
    handleBackBoard,
    namePlayer1,
    namePlayer2
  } = props;

  const convertNumberToCharacter = num => {
    return String.fromCharCode(65 + num);
  };

  const renderHistory = (data, order = 'ASC') => {
    if (order === 'ASC') {
      return data.map((item, index) => {
        const idx = index;
        return (
          <button
            key={idx}
            onClick={() => handleBackBoard(index)}
            type="button"
            className={`list-group-item list-group-item-action`}
            disabled
          >
            #{index + 1} {item.turnPlayer1 ? namePlayer1 : namePlayer2}
            :({item.i},{convertNumberToCharacter(item.j)})
          </button>
        );
      });
    }
    return data
      .map((item, index) => {
        return (
          <button
            key={String(index)}
            onClick={() => handleBackBoard(index)}
            type="button"
            className={`list-group-item list-group-item-action`}
            disabled
          >
            #{index + 1} {item.turnPlayer1 ? namePlayer1 : namePlayer2}
            :({item.i},{convertNumberToCharacter(item.j)})
          </button>
        );
      })
      .reverse();
  };

  return (
    <div className="card">
      <div className="card-header">
        <button className="btn" onClick={handleOrderHistory} type="button">
          Lịch sử {orderHistory === 'ASC' ? '▾' : '▴'}
        </button>
      </div>
      <div className="card-body p-3">
        <div className="list-group">
          {renderHistory(historyBoard, orderHistory)}
        </div>
      </div>
    </div>
  );
};

export default History;
