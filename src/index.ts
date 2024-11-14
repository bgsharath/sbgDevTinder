const express = require('express')
const app = express()

app.get('/',(req:any,res:any)=>{
    res.send('hello from server /')
})

app.get('/get',(req:any,res:any)=>{
    res.send('hello from server /get')
})

app.listen(3000,()=>{
    console.log('server started')
})
