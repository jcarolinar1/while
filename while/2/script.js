/*2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.*/

let num1 = prompt("Ingresa un numero entre 1 y 50: ");
let num2 = prompt("Ingresa un numero entre 1 y 50: ");

for (let i = 1; i <= 50; i++) {
  if (i == num1 || i == num2) {
    alert("¡Lotería!");
  } else {
    alert(i);
  }
}
