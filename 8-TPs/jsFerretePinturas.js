/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tFahrenheit = document.getElementById("Temperatura").value;
    var tCentigrados;

    tFahrenheit = parseInt(tFahrenheit);

    tCentigrados = (tFahrenheit - 32) * 5/9;

    alert(tFahrenheit + "°F son " + tCentigrados + "°C");
}

function CentigradosFahrenheit () 
{
	var tFahrenheit;
    var tCentigrados = document.getElementById("Temperatura").value;

    tCentigrados = parseInt(tCentigrados);

    tFahrenheit = tCentigrados * 9/5 + 32;

    alert(tCentigrados + "°C son " + tFahrenheit + "°F");
}
