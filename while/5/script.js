/*5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.*/
// Creamos una variable para guardar el día de la semana introducido por el usuario

let dia = "";
while (dia !== "domingo") {

  dia= prompt("Introduce un dia de la semana:");
  switch (dia) {
    case "lunes":
      alert("inicio de semanaaa");
      break;
    case "martes":
      alert("ten un buen martes");
      break;
    case "miercoles":
      alert("por fin miercoles!");
      break;
    case "jueves":
      alert("Feliz juernes");
      break;
    case "viernes":
      alert("Es viernes y el cuerpo lo sabe");
      break;
    case "sabado":
      alert("sabado en familia!");
      break;
  }
}
alert("Ve a descansar");