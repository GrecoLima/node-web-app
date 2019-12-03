'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world Teste Rebuild\n');
});

router.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(__dirname + '/View'));
app.use('/', router);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);