let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});


function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  const userTurn = document.querySelector('.turn');
  userTurn.textContent = `${turn.toUpperCase()} turn`;
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  const winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] 
  ];
  
  const gameField = Array.from(board.children).map((current, index) => {
    let turnSign;
    if (current.classList.length > 1) {
      turnSign = current.classList[1].split('-')[1];
    } else {
      turnSign = '';
    }
      return {
        index: index,
        sign: turnSign
      };
  });

  let isWinner = false;
  winCases.forEach(winCase => {
    const [posA, posB, posC] = winCase;

    const signA = gameField[posA].sign;
    const signB = gameField[posB].sign;
    const signC = gameField[posC].sign;

    if (signA !== '' && signA === signB && signA === signC) {
      isWinner = true;
      alert('Wygral: ' + signA.toUpperCase());
      reset();
    }
    
  });
  
  if (!isWinner) {
    const isDraw = gameField.every(field => field.sign !== '');
    if (isDraw) {
      alert('Remis');
      reset();
    }
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset);

function reset() {
  // 4. zresetuj stan gry
  
  tiles.forEach(tile => {
    tile.setAttribute('class', 'tile');
  });

  turn = "x";
  displayTurn('x');
}
