var express = require('express')
var path = require('path')
var app = express()
app
    .use('/public/',express.static(path.join(__dirname,'./public/')))
    .use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
    .engine('html',require('express-art-template'))
    .get('/',function(req,res){
        res.render('index.html',{
            name:'haoAo'
        })
    })
    .listen(3000, function () {
        console.log('服务器启动成功,可访问: http://127.0.0.1:3000')
      })
