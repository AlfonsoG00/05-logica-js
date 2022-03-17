var num1 = prompt("Por favor escriba el primer número");
var num2 = prompt("Por favor escriba el segundo número");
var num3 = prompt("Por favor escriba el tercer número");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
if (num1 > num2 && num1 > num3){
    alert("El primer número es el mayor, el cual es: " + num1)
}
else if(num2 > num1 && num2 > num3) {
    alert("El segundo número es el mayor, el cual es: " + num2)
}
else if(num3 > num1 && num3 > num2) {
    alert("El tercer número es el mayor, el cual es: " + num3)
}
else{
    alert("Cuidado repetiste un número, por favor revisalos.")
}