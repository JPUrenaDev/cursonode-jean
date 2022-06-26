const { help } = require("yargs");
const helpers = require("./helpers/tablaMultiplicar");

helpers
  .tablaMultiplicar(helpers.yarg.b, helpers.yarg.l, helpers.yarg.h)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

//prueba prueba
