const express = require('express');
const app = express();
const db = require('./app/models/db')

const Router = require('./app/controllers/routes');


const port = 5000;

//app.use(express.json());



app.use('/api',Router)

app.listen(port)
console.log("servidor http://localhost:5000");
