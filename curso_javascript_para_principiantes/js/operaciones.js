/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - diferentes operaciones de JavaScript.
------------
Referencia
------------
Curso: JavaScript para principiantes.
Sesión: Tipo de datos primitivos.
Plataforma: Open Webinars.
Profesora: Cristina Ponce.
*/

//TYPEOF te muestra el tipo de dato.
let num1 = 20;
let num2 = '20';
console.log(num1 + ' es de tipo ' + typeof num1);
console.log(num2 + ' es de tipo ' + typeof num2);

//ISNAN te comprueba si es un número o no y devuelve true or false.
console.log(isNaN('Esto es un string'));
console.log(isNaN(NaN));
console.log(isNaN(25));

//TOSTRING convierte un number a string.
let number1 = 100;
console.log(number1.toString);

//TOFIXED para redondear números con decimales.
let number2 = 100.456589759;
console.log(number2.toFixed(2));