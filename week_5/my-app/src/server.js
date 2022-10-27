const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('../routes/routes.js');

app.use(cors()); 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.use('/api/', routes);
app.use(express.static(path.join(__dirname, './index.html')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './404.html'));
});