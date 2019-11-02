import React from 'react';

const Square = props => {
  const { children, indexRow, indexCol, highline, handleClickSquare } = props;

  const className = `font-weight-bold vert hori "  + ${
    children === 'X' ? ' text-danger' : ' text-info'
  } + ${highline ? ' bg-warning' : ''}`;

  return (
    <td
      onClick={() => {
        if (children === null) {
          handleClickSquare(indexRow, indexCol);
        }
      }}
      className={className}
      role="presentation"
    >
      {children}
    </td>
  );
};

export default Square;
