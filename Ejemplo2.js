var gradosf = prompt("¿Cúal es la temperatura en Fahrenheit?");
gradosf = parseInt(gradosf);
var grados = Operacion();

function Operacion() {
    //formula de transformacion
    grados = (5 * (gradosf-32)) / 9;
    return grados;
}
alert("La temperatura en grados celcius es: " + grados);