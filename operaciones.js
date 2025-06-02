const fs = require("fs"); //importamos

//1.creamos una función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
//leemos el archivo de citas y lo convertimos a JSON
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8")); //usamos readFilesSync para leer el archivo citas.json
//y el json.parse para convertir el texto en un arreglo JS
//creamos un nuevo objeto con la información recibida
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

//agregamos la nueva cita al arreglo
  citas.push(nuevaCita);

//escribimos el archivo de nuevo con la cita ya agregada
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));

  console.log("✅ Cita registrada con éxito."); //imprimimos en la consola
};

//2. creamos la función para leer y mostrar todas las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log("📋 Citas registradas:");
  console.log(citas);
};

//exportamos ambas funciones
module.exports = {
  registrar,
  leer
};


//operaciones.js contiene las funciones para registrar y leer las citas