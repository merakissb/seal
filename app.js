// path: src/app.js

const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();
const PORT =  3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

sequelize.sync({ force: false }).then(() => {
  console.log('Conexión a la base de datos establecida');

  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});
