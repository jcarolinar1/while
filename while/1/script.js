/*1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.*/
// Preguntar al usuario un número

let num = prompt("Escribe un numero: ");
let i = 1;
while (i <= num) {
  
  if (i % 5 == 0) {

    alert(i);
  }
  
  i++;
}
