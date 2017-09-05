export const getGameStatus = board => {
  const cols = board.reduce((acc, cur) =>
    cur.map((cell, cellIndex) => [...acc[cellIndex] || [], cell]), []);

  const firstDiagonal = board.map((row, index) => row[index]);

  const secondDiagonal = board.map(row => [...row].reverse()).map((row, index) => row[index]);

  const isWins = symbol =>
    [...board, ...cols, firstDiagonal, secondDiagonal].some(row => row.every(item => item === symbol));

  if (isWins('X')) {
    return 'X';
  }
  if (isWins('O')) {
    return 'O';
  }
  if (board.every(row => row.every(cell => !!cell))) {
    return '-';
  }
};
