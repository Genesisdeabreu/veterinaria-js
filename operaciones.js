const fs = require("fs"); //importamos

//1.Función para registrar una cita **solo si todos los campos están completos** para que no marque undefined
const registrar = (nombre, edad, animal, color, enfermedad) => {
  // Validamos que ningún campo esté vacío o undefined
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("❌ Todos los campos son obligatorios. Intenta así:");
    console.log('node index.js registrar "Benito" "2 años" perro blanco vomitos');
    return; // detenemos la función si falta algún dato
  }

  // Leemos el archivo y convertimos a JSON
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  // Creamos la nueva cita
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  // Agregamos al array y guardamos el archivo
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));

  console.log("✅ Cita registrada con éxito.");
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