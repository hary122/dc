const express = require('express')
const ejs = require('ejs')
const app = express()


app.set('view engine',ejs)
app.set('views',__dirname+'/views')

app.get('/',(req,res)=>{
res.send('Its Working !')
})

app.get('/app',(req,res)=>{
    res.render('index.ejs',{name:"harkirat"})
})

app.listen(8080,()=>{
    console.log("App running at http://localhost:8080")
})