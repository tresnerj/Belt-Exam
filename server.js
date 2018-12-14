const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');

app.set('views', __dirname+'/views');

app.use(bp.json());

require('./server/routes.js')(app)

app.use(express.static( __dirname + '/public/dist/public' ));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, ()=>console.log('gooooooooo'))