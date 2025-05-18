require("dotenv").config();
const express = require('express');

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.send(process.env.MONGODB_URI);
});


module.exports = app;