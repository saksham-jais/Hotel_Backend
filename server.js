const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Welcome To Our Hotel')
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuitem',menuRoutes);
const PORT=process.env.PORT || 3000;
app.listen(PORT, () => { console.log("Server is Running On Port 3000") })