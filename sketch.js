function setup() {
  createCanvas(800, 800);
     background("blue");

}

function draw() {
 
  stroke("red");
  fill ("black");
 
  if(mouseIsPressed){
    circle(mouseX, mouseY, 17, 17);
  }
}
