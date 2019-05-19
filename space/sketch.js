var myData;
var x=0;

function setup() {
	createCanvas(200,200)
  loadJSON("http://api.open-notify.org/astros.json",gotData);
}
function gotData(data){
	myData  = data;
	console.log(x);
}
function draw(){
	
	background(0);
	console.log(myData);
	if(myData){
	randomSeed(4);
	for(var i=0; i<myData.number;i++){
		ellipse(random(width),random(height),10,10);
	}}
	
	
	stroke(255);
	line(x,0,x,height);
	x=x+1;
	if(x>width){
		x=0;
	}
	
	
	
}
