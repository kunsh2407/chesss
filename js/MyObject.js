class MyObject {
  constructor(x, y, width, height, color, imagePath) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    if (imagePath ) {
      this.image = loadImage(imagePath);
    }
    this.color = color;
    this.active = true;
    this.currentBox=[]
  }
  display() {
    if (this.image) {
      push();
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    } else {
      push();
      stroke(" #CFA76E");
      strokeWeight(3);
      fill(this.color);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
      console.log("rect")
      pop();
    }
  }
  checkPath(arr2,arr3){
var i =this.currentBox[0]
var j=this.currentBox[1]
var a=arr2[0]
var b=arr2[1]
var k=arr3[0]
var l=arr3[1]

  }
  checkCurrentPos(x,y,board){
for(var i=0;i<board.length;i++){
  for(var j=0;j<board[i].length;j++){
    if(x===board[i][j].x && y===board[i][j].y ){
      var currentBox=[1,j]
      return[i,j]
    }
  }
}
return false
  }
  isClicked(){
    if(this.x+this.width/2>mouseX && this.x-this.width/2<mouseX && this.y+this.height/2>mousey && 
      this.y-this.height/2<mouseY){
        return true
      }
      else{
        return false
      }
  }
movePeg(pos,board){
  this.x=board[pos[0]][pos[1]].x
  this.y=board[pos[0]][pos[1]].y
}
  
}
