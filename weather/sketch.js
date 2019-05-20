
var weather;
function setup() {
 
  createCanvas(400,400);
	
	loadJSON('http://api.openweathermap.org/data/2.5/find?q=London&appid=127c5673b4f4648033f407a6d6cd8339&units=metric',gotData);
	

}
function gotData(data){
	weather = data;

}
function draw(){
	background(0);
	if(weather){
	
		ellipse(50,100,weather.list[0].main.temp,weather.list[0].main.temp);
		ellipse(150,100,weather.list[0].main.humidity,weather.list[0].main.humidity);
		
	}
}
