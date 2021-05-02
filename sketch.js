var rectangle1,rectangle2;
function setup() {
  createCanvas(800,400);
 rectangle1= createSprite(300, 200, 50, 50);
 rectangle2= createSprite(500,300,50,50);
 rectangle1.shapeColor="red"
 rectangle2.shapeColor="blue"
}

function draw() {
  background(255,255,255); 
  rectangle1.x=mouseX
  rectangle1.y=mouseY
  console.log(rectangle1.x-rectangle2.x) 
  if(rectangle1.x-rectangle2.x<rectangle2.width/2+rectangle1.width/2
    && rectangle2.x-rectangle1.x<rectangle2.width/2+rectangle1.width/2
    &&rectangle1.y-rectangle2.y<rectangle2.height/2+rectangle1.height/2
    &&rectangle2.y-rectangle1.y<rectangle2.height/2+rectangle1.height/2){
    rectangle1.shapeColor="black"
    rectangle2.shapeColor="pink"
  }
  else{
    rectangle1.shapeColor="red"
    rectangle2.shapeColor="blue"
  }
  drawSprites();
}