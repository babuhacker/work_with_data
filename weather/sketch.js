
var weather;
var api="http://api.openweathermap.org/data/2.5/find?q=";
var city="London";
var apikey="&appid=127c5673b4f4648033f407a6d6cd8339";
var units="&units=metric";
var input;
function setup() {
	var button = select('#submit');
	button.mousePressed(weatherAsk);
	createCanvas(400,400);
	input = select('#city');
	

}
function weatherAsk(){
	url=api+input.value()+apikey+units;
	console.log(url);
	loadJSON(url,gotData);
	
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
