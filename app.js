
const express = require('express')
const app = express()
const requestMessage = require('./api/routes/requestMessage')
const bodyParser=  require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/request',requestMessage)

app.use((req,res,next)=>{
    res.status(200).json({
        message:'app is running'
    })
})

module.exports = app