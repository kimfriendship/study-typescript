interface TV {
  turnOn(): void;
  turnOff(): boolean;
}

const myTV: TV = {
  turnOn() {

  }, 
  turnOff() { 
    return false
  }, 
};

function turnOnTV(tv: TV) {
  tv.turnOn();
}

turnOnTV(myTV);

interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] =[];
  
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({row,col})
    }
  }

  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  }
};

interface SignUp {
  email: string;
  password: string;
}

function signUp(data: SignUp) {
  // do something
}

signUp({email: 'blabla', password: 'tada'});
