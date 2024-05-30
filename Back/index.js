const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();



const app = express();
app.use(cors());








app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
