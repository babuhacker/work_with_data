var flower;

function preload(){
	flower = loadJSON("flower.json");
}
function setup() {
  // put setup code here
  createCanvas(200,200);
	
	
	
  console.log(flower);
}

function draw() {
  // put drawing code here
  background(0);
  fill(flower.r,flower.g,flower.b);
  text(flower.name,10,50);
}
