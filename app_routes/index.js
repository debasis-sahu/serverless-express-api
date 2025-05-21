require('dotenv').config();
const express = require('express');
const authRoutes = require('./authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

module.exports = app;