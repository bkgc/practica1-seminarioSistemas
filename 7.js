var cadena = prompt("Introduce un Texto:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);
    salida = car + salida;
}
document.write(salida);