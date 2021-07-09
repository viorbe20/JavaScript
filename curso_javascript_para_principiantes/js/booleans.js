/*
Autora - Virginia Ordoño Bernier
Fecha - julio 2021
Contenido - diferentes operaciones con booleans.
------------
Referencia
------------
Curso: JavaScript para principiantes.
Sesión: Tipo de datos primitivos.
Plataforma: Open Webinars.
Profesora: Cristina Ponce.
*/

console.log(Boolean(1));
console.log(Boolean(1.50));
console.log(Boolean(50 > 5));
console.log(Boolean(50 < 5));
console.log(Boolean('Hello'));
console.log(Boolean('10' == 10));
console.log(Boolean('10' === 10)); //Compara valor y tipo de dato.

//Todo false porque son todos valores negativos.
console.log(Boolean(0));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));