/*3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.*/

let num = [];
let numero= prompt("Escribe un numero: ");
while (numero != 0) {
  num.push(numero);
  numero = prompt("Escribe un numero: ");
}
alert(num);
