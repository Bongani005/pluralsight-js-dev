import express from 'express';
import { join } from 'path';
import open from 'open';
import { error } from 'console';

var port = 3000;
var app = express();

app.get('/', function(req, res) {
    res.sendFile(join(__dirname, '../scr/index.html'));
})

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})