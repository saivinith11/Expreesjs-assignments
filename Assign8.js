const express = require('express')
const app = express()
const pug = require('pug')
const path = require('path')

app.set('views', path.join(__dirname, 'templets'))
app.set('view engine', 'pug')
app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()})
})

app.listen(3000,process.argv[3])