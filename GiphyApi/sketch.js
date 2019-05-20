/*

api.ghiphy.com

9jKmhOnFzeEkMCj3llWmyGzvx9e5YB8x
"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9jKmhOnFzeEkMCj3llWmyGzvx9e5YB8x"
http://api.giphy.com/v1/gifs/search?&api_key=9jKmhOnFzeEkMCj3llWmyGzvx9e5YB8x&q=rainbow
*/

var http = "http://api.giphy.com/v1/gifs/search?";
var apikey="&api_key=9jKmhOnFzeEkMCj3llWmyGzvx9e5YB8x";
var query = "&q=rainbow";



function setup(){
	noCanvas();
	var url = http+apikey+query;
	loadJSON(url,gotData);
	
}
function gotData(giphy){
	for(var i=0; i<giphy.data.length;i++){
	createImg(giphy.data[i].images.original.url);
}
}

function draw(){
	
	
}
