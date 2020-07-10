const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'));

app.listen(port, () => {
   console.log('Server is up!');
});