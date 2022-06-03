window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tile"));

  const currentPlayer = document.getElementById("activePlayer");

  let board = ["", "", "", "", "", "", "", "", ""];

  let cp = "X";

  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let resetBoard = () => {
    let board = ["", "", "", "", "", "", "", "", ""];
  };

  async function handleResult() {
    let currentRound = false;

    for (let i = 0; i <= 7; i++) {
      const winCondition = winningCondition[i];
      const input1 = board[winCondition[0]];
      const input2 = board[winCondition[1]];
      const input3 = board[winCondition[2]];

      if (input1 === "" || input2 === "" || input3 === "") {
        continue;
      }
      if (input1 === input2 && input2 === input3) {
        currentRound = true;
        break;
      }
    }

    if (currentRound == true) {
      if (cp === "X") window.alert("O has won");
      else window.alert("X has won");
      resetBoard();
    }
  }

  const changePlayer = () => {
    cp = cp === "X" ? "O" : "X";
    currentPlayer.innerHTML = cp;
  };

  const isLocked = (tile) => {
    if (tile.innerHTML === "X" || tile.innerHTML === "O") {
      return true;
    }
    return false;
  };

  const updateBoard = (index) => {
    board[index] = cp;
    console.log(board);
  };

  const userAction = (tile, index) => {
    console.log(index);
    if (!isLocked(tile)) {
      tile.innerHTML = cp;
      changePlayer();
    }
    updateBoard(index);
    handleResult();
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => userAction(tile, index));
  });
});
