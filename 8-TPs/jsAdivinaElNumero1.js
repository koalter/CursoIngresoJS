/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var ganador;
var min = 1;
var max = 100;

function comenzar()
{
  numeroSecreto = Math.floor(Math.random() * max + min);
  contadorIntentos = 0;
  document.getElementById("intentos").value = contadorIntentos;
  ganador = false;
  
	alert("El juego ha comenzado!!!");
}

function verificar()
{
  var numero = document.getElementById("numero").value;
  var mensaje;
  
  if(numero != "" && numeroSecreto != undefined)
  {
    if(ganador == false)
    {
      contadorIntentos++;
      document.getElementById("intentos").value = contadorIntentos;

      if(numero == numeroSecreto)
      {
        mensaje = "Usted es un ganador!!! y en solo " + contadorIntentos + " intentos";

        ganador = true;
      }
      else if(numero < numeroSecreto)
      {
        mensaje = "Falta...";
      }
      else
      {
        mensaje = "Se pasó...";
      }
    }
    else
    {
      mensaje = "El juego terminó!! Presione Comenzar para volver a jugar!!!";
    }
    
  }
  else
  {
    mensaje = "ERROR";
  }

  alert(mensaje);
  
}