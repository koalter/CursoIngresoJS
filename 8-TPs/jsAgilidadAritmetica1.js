/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var respuestaCorrecta;
function comenzar()
{
    var primerNumero = Math.floor(Math.random() * 10 + 1);
    var segundoNumero = Math.floor(Math.random() * 10 + 1);
    var operador = Math.floor(Math.random() * 3);

    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    switch(operador)
    {
        case 0:
            operador = "+";
            respuestaCorrecta = primerNumero + segundoNumero;
            break;
        case 1:
            operador = "-";
            respuestaCorrecta = primerNumero - segundoNumero;
            break;
        case 2:
            operador = "*";
            respuestaCorrecta = primerNumero * segundoNumero;
            break;
        case 3:
            operador = "/";
            respuestaCorrecta = primerNumero / segundoNumero;
            break;
    }

    document.getElementById("PrimerNumero").value = primerNumero;
    document.getElementById("SegundoNumero").value = segundoNumero;
    document.getElementById("Operador").value = operador;
    document.getElementById("Respuesta").value = "";
	

}//FIN DE LA FUNCIÓN
function Responder()
{
    var mensaje;

    respuesta = document.getElementById("Respuesta").value;
    
    if(respuesta == respuestaCorrecta)
    {
        mensaje = "Correcto!!";
    }
    else
    {
        mensaje = "Respuesta incorrecta!! \nLa respuesta es: " + respuestaCorrecta;
    }

    alert(mensaje);

    comenzar();

}//FIN DE LA FUNCIÓN
