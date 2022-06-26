const fs = require("fs");
const { boolean } = require("yargs");
const yarg = require("yargs")
  .option("base", {
    alias: "b",
    describe: "selecciona un numero",
    type: Number,
    default: 5,
  })
  .option("mostrar", {
    alias: "m",
    describe: "quieres mostrar la tabla",
    type: Boolean,
    default: false,
  })
  .option("limite", {
    alias: "l",
    describe: "quieres mostrar la tabla",
    type: Number,
    default: 12,
  }).argv;
console.log(yarg.m);
let resultado = "";
const tablaMultiplicar = async (base = 10, obligatorio, limite = 12) => {
  try {
    for (let i = 1; i <= limite; i++) {
      resultado += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`tabla-del-${base}`, resultado);

    if (yarg.m == "false") {
      return `la tabla del ${base} se ha guardado correctamente`;
    } else {
      console.log(resultado);
    }
  } catch (err) {
    return `Ha sucedido un error al guardar la tabla del ${base}`;
  }
};

module.exports = { yarg, tablaMultiplicar };
