const moongose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await moongose.connect(process.env.DB_MONGO, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // Detener la app
  }
};

module.exports = conectarDB;
