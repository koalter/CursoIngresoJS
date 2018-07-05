/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar() 
{
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    var suma;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    alert("El precio total es: $" + suma);

}
function Promedio() 
{
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    var suma;
    var promedio;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    promedio = suma / 3;

    alert("El costo promedio es: $" + promedio);
}
function PrecioFinal() 
{
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    var suma;
    var iva;
    var precioFinal;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    iva = suma * 21/100;
    precioFinal = suma + iva;

    //alert("El precio total es: $" + precioFinal);
    alert("El subtotal es: $" +suma+ "\nPagará de IVA: $" +iva+ "\nEl precio total es: $" +precioFinal);
}