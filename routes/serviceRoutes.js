const express = require("express");
const ServiceController = require('../controllers/services')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/service', ServiceController.findAll);
app.get('/service/detail/:id', ServiceController.findOne);
app.post('/create/service/', ServiceController.create);
app.patch('/service/update/:id', ServiceController.update);
app.delete('/service/delete/:id', ServiceController.destroy);

module.exports = app;