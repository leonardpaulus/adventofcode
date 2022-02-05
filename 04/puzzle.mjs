import { numbers, boards } from "./input.mjs";

const bingo = (numbers, boards) => {
  let currentBoards = [...boards];
  let winningBoardIndex;
  let winningNumber;

  numbers.find((number, index) => {
    for (let i = 0; i < currentBoards.length; i++) {
      winningNumber = numbers[index];
      currentBoards = currentBoards.map((board) =>
        board.map((row) => row.map((num) => (num === number ? "X" : num)))
      );
      winningBoardIndex = currentBoards.findIndex(
        (board) =>
          board.some((row) => row.every((entry) => entry === "X")) ||
          board.every((row, i) => {
            let counter = 0;
            if (row[counter] === "X") return true;
            if (i === 4) {
              counter++;
            }
          })
      );
      if (winningBoardIndex >= 0) {
        return true;
      }
    }
    return false;
  });

  const sumOfBoard = (board) => {
    const rowSum = board.map((row) =>
      row.reduce((currentValue, nextValue) => {
        if (nextValue !== "X") {
          return currentValue + nextValue;
        }
        return currentValue;
      }, 0)
    );
    const sum = rowSum.reduce((prev, current) => prev + current);
    return sum;
  };

  const winningBoardSum = sumOfBoard(currentBoards[winningBoardIndex]);

  const sum = winningBoardSum * winningNumber;

  return sum;
};

console.log(bingo(numbers, boards));
