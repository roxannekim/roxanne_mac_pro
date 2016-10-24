var api = 'https://api.nasa.gov/planetary/apod?';
var apikey = 'api_key=h6TxzwdshCinc7JZv9ThlPCMPzyYIHOnvUTJmH8f';
var date = '&date=';
var input;


function setup() {
	noCanvas();


  var button = select('#submit');
  button.mousePressed(travel);

  input = select ('#dob');

 }

function travel(){
	var url = api + apikey + date + input.value();
  loadJSON(url,gotData);

}




function gotData(data){
  createElement('h1',data.date);
	pix = createImg(data.url);
  createElement('h2', data.explanation);

}
