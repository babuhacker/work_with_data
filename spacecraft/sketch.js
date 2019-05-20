var lineX=0;
var url="http://api.open-notify.org/iss-now.json";
var issX;
var issY;

function setup(){
	
	createCanvas(400,400);
	setInterval(askISS,1000);
	
}
function askISS(){
	loadJSON(url,gotData);
	
}
function gotData(data){
	var lat=data.iss_position.latitude;
	var long=data.iss_position.longitude;
	console.log(lat);
	console.log(long);
	issX = map(lat,0,24,0,width);
	issY = map(long,0,-500,0,height);
	console.log(issX);
	console.log(issY);
}

function draw(){
	
	background(51);
	
	ellipse(issX,issY,24,24);
	
	stroke(255);
	line(lineX, 0, lineX, height);
	lineX = lineX+5;
	if(lineX>width){
		lineX=0;
	}
	
}
