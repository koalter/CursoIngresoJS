/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedra = 1;
var papel = 2;
var tijera = 3;
var mensaje;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3 + 1);
}//FIN DE LA FUNCIÓN
function Piedra()
{
    var eleccion = piedra;

    switch(eleccionMaquina)
    {
        case piedra:
            mensaje = "Empate!!";
            break;
        case papel:
            mensaje = "Perdió!!";
            break;
        case tijera:
            mensaje = "Ganó!!";
            break;
    }

    alert(mensaje);
    //console.log(eleccionMaquina);
    comenzar();
}//FIN DE LA FUNCIÓN
function Papel()
{
    var eleccion = papel;

    switch(eleccionMaquina)
    {
        case piedra:
            mensaje = "Ganó!!";
            break;
        case papel:
            mensaje = "Empate!!";
            break;
        case tijera:
            mensaje = "Perdió!!";
            break;
    }

    alert(mensaje);
    //console.log(eleccionMaquina);
    comenzar();
}//FIN DE LA FUNCIÓN
function Tijera()
{
	var eleccion = tijera;

    switch(eleccionMaquina)
    {
        case piedra:
            mensaje = "Perdió!!";
            break;
        case papel:
            mensaje = "Ganó!!";
            break;
        case tijera:
            mensaje = "Empate!!";
            break;
    }

    alert(mensaje);
    //console.log(eleccionMaquina);
    comenzar();
}//FIN DE LA FUNCIÓN