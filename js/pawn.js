class Pawn extends MyObject {
  constructor(x, y, color) {
    if (color === "white") {
      var imagePath = "../images/pawnw.png";
    } else {
      var imagePath = "../images/pawnb.png";
    }
    super(x, y, 30, 45, color, imagePath);
  }
  checkMove(newpos, board) {
    this.currentBox = this.checkCurrentPos(this.x, this.y, board);
    var newbox = newpos;
    if (this.color === "white") {
      if (
        abs(newbox[1] - this.currentBox[1]) == 0 &&
        newbox[0] - this.currentBox[0] == -1
      ) {
        if (!this.isBlocked(newpos, board)) {
          return true;
        } else {
          return false;
        }
      } else if (
        abs(newbox[1] - this.currentBox[1]) == 1 &&
        newbox[0] - this.currentBox[0] == -1
      ) {
        if (!this.isBlocked(newpos, board)) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      if (
        abs(newbox[1] - this.currentBox[1]) == 0 &&
        newbox[0] - this.currentBox[0] == 1
      ) {
        if (!this.isBlocked(newpos, board)) {
          return true;
        } else {
          return false;
        }
      } else if (
        abs(newbox[1] - this.currentBox[1]) == 1 &&
        newbox[0] - this.currentBox[0] == 1
      ) {
        if (!this.isBlocked(newpos, board)) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  isBlocked(newpos, board) {
    for (var i = 0; i < players.length; i++) {
      for (var j = 0; j < players[i].length; j++) {
        if (
          i != player.index &&
          players[i][j].x == board[(newpos[0], newpos[1])].x &&
          players[i][j].y == board[(newpos[0], newpos[1])].y
        ) {
            return true
        }
      }
    }
    return false
  }
}
