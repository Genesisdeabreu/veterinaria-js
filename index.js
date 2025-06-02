//importamos las funciones del archivo de operaciones.js
const { registrar, leer } = require("./operaciones");

//capturamos los argumentos desde la línea de comandos
const [,, operacion, nombre, edad, animal, color, enfermedad] = process.argv; //usamos process.argv para leer lo q el usuario escribe después de node index.js

//evaluamos qué operación se pidió, la operación puede ser registrar o leer
if (operacion === "registrar") { //si es registrar, se va a extraer: nombre, edad, animal, color y enfermedad
  registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === "leer") {
  leer();
}


//index.js va a interpretar lo que escribimos en la terminal y va a llamar a las funciones correctas



//Comentarios de citas JSON:
//comenzamos con una lista vacía: [] 
//a medida de que vayamos agregando citas se van a ir añadiendo objetos al arreglo
//citas.json va a guardar las citas como si fuera una base de datos