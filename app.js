const https = require("https");
const fs = require("fs");
const path = require("path")
const express = require('express')
const app = express()
https
    .createServer({
        key: fs.readFileSync("./certificates/private.pem"),
        cert: fs.readFileSync("./certificates/public.pem"),
    },
        app)
    .listen(4000, () => {
        console.log('server is runing at port 4000')
    });


app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
})
app.use(express.static(__dirname + '/public'));