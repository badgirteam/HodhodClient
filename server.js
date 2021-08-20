/* eslint-disable */
const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('./public/'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'public/' });
});
app.listen(process.env.PORT || port);
