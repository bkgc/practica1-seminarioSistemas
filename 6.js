var cadena = prompt("Introduce un Texto que contenga paréntesis:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
var copiar = false;
        
for (j = 0; j < numchar; j++) {
	car = cadena.charAt(j);
	if (car == ")") {
        copiar = false;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == "(") {
        copiar = true;
    }
}
document.write(salida);