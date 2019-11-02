// eslint-disable-next-line import/no-mutable-exports
let lineWin = [];
function KiemTraChienThangNgang(board, character, rowSelected, colSeleted) {
  const row = rowSelected;
  let col = colSeleted;
  const MaxColum = board[0].length;
  let count = 1; // Tinh Luon cái vị trí minh đã đánh
  let BiChanTrai = false;
  let BiChanPhai = false;

  lineWin = [];
  lineWin.unshift({ row: rowSelected, col: colSeleted });

  // Dem Ben Trai
  col -= 1;
  while (col >= 0) {
    if (board[row][col] === character) {
      lineWin.unshift({ row: rowSelected, col });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanTrai = true;
      break;
    }
    col -= 1;
  }

  // Dem Ben Phai
  col = colSeleted; // Reset Vi Tri Ban Dau
  col += 1;
  while (col < MaxColum) {
    if (board[row][col] === character) {
      lineWin.unshift({ row: rowSelected, col });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanPhai = true;
      break;
    }
    col += 1;
  }

  if (BiChanTrai === true && BiChanPhai === true && count >= 6) {
    return true;
  }

  if (BiChanPhai === true && BiChanTrai === true) {
    return false;
  }

  if ((BiChanTrai === true || BiChanPhai === true) && count === 5) {
    return true;
  }

  if (BiChanTrai === false && BiChanPhai === false && count >= 4) {
    return true;
  }

  return false;
}

function KiemTraChienThangDoc(board, character, rowSelected, colSeleted) {
  let row = rowSelected;
  const col = colSeleted;
  const MaxRow = board.length;
  let count = 1; // Tinh Luon cái vị trí minh đã đánh
  let BiChanTren = false;
  let BiChanDuoi = false;

  lineWin = [];
  lineWin.unshift({ row: rowSelected, col: colSeleted });

  // Dem Ben Tren
  row -= 1;
  while (row >= 0) {
    if (board[row][col] === character) {
      lineWin.unshift({ row, col: colSeleted });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanTren = true;
      break;
    }
    row -= 1;
  }

  // Dem Ben Duoi
  row = rowSelected; // Reset Vi Tri Ban Dau
  row += 1;
  while (row < MaxRow) {
    if (board[row][col] === character) {
      lineWin.unshift({ row, col: colSeleted });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanDuoi = true;
      break;
    }
    row += 1;
  }

  if (BiChanTren === true && BiChanDuoi === true && count >= 6) {
    return true;
  }

  if (BiChanDuoi === true && BiChanTren === true) {
    return false;
  }

  if ((BiChanTren === true || BiChanDuoi === true) && count === 5) {
    return true;
  }

  if (BiChanTren === false && BiChanDuoi === false && count >= 4) {
    return true;
  }

  return false;
}

function KiemTraChienThangCheoTrai(board, character, rowSelected, colSeleted) {
  let row = rowSelected;
  let col = colSeleted;
  const MaxRow = board.length;
  const MaxColum = board[0].length;
  let count = 1; // Tinh Luon cái vị trí minh đã đánh
  let BiChanTren = false;
  let BiChanDuoi = false;

  lineWin = [];
  lineWin.unshift({ row: rowSelected, col: colSeleted });

  // Dem Ben Tren
  row -= 1;
  col -= 1;
  while (row >= 0 && col >= 0) {
    if (board[row][col] === character) {
      lineWin.unshift({ row, col });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanTren = true;
      break;
    }
    row -= 1;
    col -= 1;
  }

  // Dem Ben Duoi
  row = rowSelected; // Reset Vi Tri Ban Dau
  col = colSeleted;
  row += 1;
  col += 1;
  while (row < MaxRow && col < MaxColum) {
    if (board[row][col] === character) {
      lineWin.unshift({ row, col });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanDuoi = true;
      break;
    }
    row += 1;
    col += 1;
  }

  if (BiChanTren === true && BiChanDuoi === true && count >= 6) {
    return true;
  }

  if (BiChanDuoi === true && BiChanTren === true) {
    return false;
  }

  if ((BiChanTren === true || BiChanDuoi === true) && count === 5) {
    return true;
  }

  if (BiChanTren === false && BiChanDuoi === false && count >= 4) {
    return true;
  }

  return false;
}

function KiemTraChienThangCheoPhai(board, character, rowSelected, colSeleted) {
  let row = rowSelected;
  let col = colSeleted;
  const MaxRow = board.length;
  const MaxColum = board[0].length;
  let count = 1; // Tinh Luon cái vị trí minh đã đánh
  let BiChanTren = false;
  let BiChanDuoi = false;

  lineWin = [];
  lineWin.unshift({ row: rowSelected, col: colSeleted });

  // Dem Ben Tren
  row -= 1;
  col += 1;
  while (row >= 0 && col < MaxColum) {
    if (board[row][col] === character) {
      lineWin.unshift({ row, col });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanTren = true;
      break;
    }
    row -= 1;
    col += 1;
  }

  // Dem Ben Duoi
  row = rowSelected; // Reset Vi Tri Ban Dau
  col = colSeleted;
  row += 1;
  col -= 1;
  while (row < MaxRow && col >= 0) {
    if (board[row][col] === character) {
      lineWin.unshift({ row, col });
      count += 1;
    } else if (board[row][col] === null) {
      break;
    } else {
      // Ky tu còn lại
      BiChanDuoi = true;
      break;
    }
    row += 1;
    col -= 1;
  }

  if (BiChanTren === true && BiChanDuoi === true && count >= 6) {
    return true;
  }

  if (BiChanDuoi === true && BiChanTren === true) {
    return false;
  }

  if ((BiChanTren === true || BiChanDuoi === true) && count === 5) {
    return true;
  }

  if (BiChanTren === false && BiChanDuoi === false && count >= 4) {
    return true;
  }

  return false;
}

function CheckChienThang(board, character, rowSelected, colSelected) {
  if (KiemTraChienThangNgang(board, character, rowSelected, colSelected)) {
    return true;
  }
  if (KiemTraChienThangDoc(board, character, rowSelected, colSelected)) {
    return true;
  }

  if (KiemTraChienThangCheoTrai(board, character, rowSelected, colSelected)) {
    return true;
  }

  if (KiemTraChienThangCheoPhai(board, character, rowSelected, colSelected)) {
    return true;
  }

  lineWin = [];
  return false;
}

function BotCaro(board, character) {
  const MAX_ROW = board.length;
  const MAX_COL = board[0].length;

  let index = Math.floor(Math.random() * MAX_ROW * MAX_COL);
  let i = Math.floor(index / MAX_ROW);
  let j = index - i * MAX_ROW;

  while (board[i][j] !== null) {
    index = Math.floor(Math.random() * MAX_ROW * MAX_COL);
    i = Math.floor(index / MAX_ROW);
    j = index % MAX_COL;
  }

  return {
    i,
    j
  };
}

export { CheckChienThang, lineWin, BotCaro };
