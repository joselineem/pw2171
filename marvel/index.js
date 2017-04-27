const rq = require('electron-require');
const main = rq.remote('./main.js');
// $significa alias o sobrenombre y aquí es de jquery
const $ = require("jquery");
var buscarPersonaje=function(){
	
}
//Posiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus();
//Evento del boton btnBuscar-click
$("#btnBuscar").on("click", buscarPersonaje);