// Funcion con nombre
function suma (a,b){
return a+b;
}
// Funcion anonima
var suma2 = function (a,b){
return a+b
}
function texto(){
	alert(document.getElementById("texto1").value)
}
function sumar(){
	var a= parseInt(document.getElementById("n1").value);
	var b= parseInt(document.getElementById("n2").value);
	alert(a+b);
}