var express = require('express')
var app = express()
app
    .use('/public/',express.static('./public/'))
    .use('/node_modules/',express.static('./node_modules/'))
