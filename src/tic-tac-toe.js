class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = "x";

    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.getFieldValue(rowIndex, columnIndex) === null && this.currentPlayerSymbol === "o") {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = "x";
    }
    if (this.getFieldValue(rowIndex, columnIndex) === null && this.currentPlayerSymbol === "x") {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = "o";
    }
  }

  isFinished() {
    if (this.noMoreTurns() === true || this.getWinner()) {
      return true;
    }

    return false;
  }

  getWinner() {
    let firstCell = this.field[0][0];
    let thirdCell = this.field[0][2];
    let fifthCell = this.field[1][1];
    let seventhCell = this.field[2][0];
    let ninthCell = this.field[2][2];
    const fieldLength = this.field.length;

    let counter0 = 0;
    let counterX = 0;

    for (let i = 0; i < fieldLength; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (this.field[i][j] === "o") {
          counter0++
        }

        if (this.field[i][j] === "x") {
          counterX++;
        }
      }

      if (counter0 === 3) {
        return "o"
      } else if (counterX === 3) {
        return "x"
      }

      counter0 = 0;
      counterX = 0;
    }

    for (let i = 0; i < fieldLength; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (this.field[j][i] === "o") {
          counter0++
        }

        if (this.field[j][i] === "x") {
          counterX++;
        }
      }

      if (counter0 === 3) {
        return "o"
      } else if (counterX === 3) {
        return "x"
      }

      counter0 = 0;
      counterX = 0;
    }

    if ((firstCell === "o" && fifthCell === "o" && ninthCell === "o")
    || (seventhCell === "o" && fifthCell === "o" && thirdCell === "o")) {
      return "o"
    }

    if ((firstCell === "x" && fifthCell === "x" && ninthCell === "x")
      || (seventhCell === "x" && fifthCell === "x" && thirdCell === "x")) {
      return "x"
    }

    return null
  }


  noMoreTurns() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {

        if (this.field[i][j] === null) {
          return false
        }
      }
    }

    return true
  }

  isDraw() {
    const isDraw = this.noMoreTurns() === true && this.getWinner() == null;

    return isDraw;
  }

  getFieldValue(rowIndex, colIndex) {
    if (this.field[rowIndex][colIndex] !== null) {
      return this.field[rowIndex][colIndex]
    }

    return null;
  }
}

module.exports = TicTacToe;
