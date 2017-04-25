const rq = require('electron-require');
const main = rq.remote('./main.js');
// $significa alias o sobrenombre y aquí es de jquery
const $ = require("jquery");

function datosRandom(){
	$.ajax({
 	 url: 'https://randomuser.me/api/',
 	 dataType: 'json',
 	 success: function(data) {
 	   $("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.last)
 	 $("#imgFoto").attr("src",data.results[0].picture.large)
 	 },
 	 error(a,b,c){
  		alert("Sin internet o servidor");
 	 }
	});
}
$("#btnInfo").on("click",datosRandom);
      