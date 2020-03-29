
var r = 0;
var g = 50;
var b=255;
var rect
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  rect=createSprite(mouseX,mouseY,50,50);
}


function draw(){

  backgroundColor="white";
  
  if(rect.x>600&&rect.y>200){
	  backgroundColor(255)
	  rect.strokeWeight(0)
  }
  if(rect.x>300&&rect.y>100){
	  backgroundColor(0)
	  rect.strokeWeight(255)
  }
  if(rect.x>900&&rect.y>300){
	  backgroundColor(50)
	  rect.strokeWeight(0)
	  
  }
  
  
}