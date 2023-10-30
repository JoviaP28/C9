var box
var boxImage
var flag
var flagImage
function setup() {
  createCanvas(1000,600);
  var box =createSprite(500,300,30,30)
  box.addImage("ice cream",boxImage)
  box.scale =0.5

  var flag =createSprite(400,200,30,30)
  flag.addImage("india flag",flagImage)
  flag.scale =0.5
}
function preload () {
  boxImage = loadImage ("icecream.jpeg")
 flagImage = loadImage ("india flag.png")
}
function draw() 
{
  background("Blue");
drawSprites()
}




