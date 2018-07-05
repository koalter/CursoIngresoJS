var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var eleccionMaquina;
var piedra = 1;
var papel = 2;
var tijera = 3;
var mensaje;



function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3 + 1);

	document.getElementById("ganadas").value = "Ganadas: " + ContadorDeGanadas;
	document.getElementById("empatadas").value = "Empates: " + ContadorDeEmpates;
	document.getElementById("perdidas").value = "Perdidas: " + ContadorDePerdidas;
}//FIN DE LA FUNCIÓN
function Piedra()
{
    var eleccion = piedra;

    switch(eleccionMaquina)
    {
        case piedra:
			mensaje = "Empate!!";
			ContadorDeEmpates++;
            break;
        case papel:
			mensaje = "Perdió!!";
			ContadorDePerdidas++;
            break;
        case tijera:
			mensaje = "Ganó!!";
			ContadorDeGanadas++;
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
			ContadorDeGanadas++;
            break;
        case papel:
			mensaje = "Empate!!";
			ContadorDeEmpates++;
            break;
        case tijera:
			mensaje = "Perdió!!";
			ContadorDePerdidas++;
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
			ContadorDePerdidas++;
            break;
        case papel:
			mensaje = "Ganó!!";
			ContadorDeGanadas++;
            break;
        case tijera:
			mensaje = "Empate!!";
			ContadorDeEmpates++;
            break;
    }

    alert(mensaje);
    //console.log(eleccionMaquina);
    comenzar();
}//FIN DE LA FUNCIÓN