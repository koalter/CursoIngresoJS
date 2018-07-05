/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    var perimetro;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = ((largo + ancho) * 2) * 3;

    alert("Se necesitan " +perimetro+ " metros de alambre para cubrir un terreno rectangular");
}
function Circulo () 
{
    var radio = document.getElementById("Radio").value;
    var perimetro;
    var pi = 3.14;
    
    radio = parseInt(radio);
    perimetro = (2 * (pi * radio)) * 3;

    alert("Se necesitan " +perimetro+ " metros de alambre para cubrir un terreno circular");
}
function Materiales () 
{
	var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    var area;
    var cemento;
    var cal;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;
    cemento = 2 * area;
    cal = 3 * area;

    alert("Se necesitan " +cemento+ " bolsas de cemento y " +cal+ " bolsas de cal para un terreno de " +largo+ "m x " +ancho+ "m");
}