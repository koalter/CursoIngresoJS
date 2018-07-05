/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
				switch(contadorIntentos)
				{
					case 1:
						mensaje = "Usted es un Psíquico";
						break;
					case 2:
						mensaje = "Excelente percepción";
						break;
					case 3:
						mensaje = "Esto es suerte";
						break;
					case 4:
						mensaje = "Excelente técnica";
						break;
					case 5:
						mensaje = "Usted está en la media";
						break;
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
						mensaje = "Falta técnica";
						break;
					default:
						mensaje = "Afortunado en el amor!!";
						break;
				}
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