import { numbers, boards } from "./testData.mjs";

const bingo = (numbers, boards) => {
  let currentBoards = [...boards];
  let winningBoardIndex;
  let winningBoard;

  numbers.find((number) => {
    for (let i = 0; i < currentBoards.length; i++) {
      currentBoards = currentBoards.map((board) =>
        board.map((row) => row.map((num) => (num === number ? "X" : num)))
      );
      winningBoardIndex = currentBoards.findIndex((board) =>
        board.some((row) => row.every((entry) => entry === "X"))
      );
      if (winningBoardIndex >= 0) {
        winningBoard = currentBoards[winningBoardIndex];
        return true;
      }
    }
    return false;
  });

  const sumOfBoard = (winningBoard) => {
    const sum = winningBoard[1].reduce((currentValue, nextValue) => {
      if (typeof nextValue === "string") {
        return currentValue + nextValue;
      }
      return currentValue;
    }, 0);
    console.log(sum);
  };

  return winningBoard;
};

console.log(bingo(numbers, boards));
