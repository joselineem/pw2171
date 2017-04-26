const rq = require('electron-require');
const main = rq.remote('./main.js');
// $significa alias o sobrenombre y aquí es de jquery
const $ = require("jquery");

function datosRandom(){
	$.ajax({
 	 url: 'https://randomuser.me/api/',
 	 dataType: 'json',
 	 success: function(data) {
 	   $("#txtNombre").html(data.results[0].name.first+" "
 	   						+data.results[0].name.last)
 	   $("#imgFoto").attr("src",data.results[0].picture.large)
 	   $("#txtLocation").html(data.results[0].location.street+", "
 	   							+data.results[0].location.city+", "
 	   							+data.results[0].location.state)
 	   $("#txtEmail").html(data.results[0].email)
 	   $("#txtLogin").html("Username: "+data.results[0].login.username+
 	   						"<br>Password: "+data.results[0].login.password)
 	   $("#txtDob").html(data.results[0].dob)
 	   $("#txtRegistered").html(data.results[0].registered)
 	   $("#txtPhone").html(data.results[0].phone)
 	   $("#txtCell").html(data.results[0].cell)
 	   $("#txtId").html(data.results[0].id.name+" "+ data.results[0].id.value)
 	   $("#txtNat").html(data.results[0].nat)

 	 },
 	 error(a,b,c){
  		alert("Sin internet o servidor");
 	 }
	});
}
$("#btnInfo").on("click",datosRandom);
      