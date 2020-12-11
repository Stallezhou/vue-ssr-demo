const express = require('express')

const app = express()

app.get('*',(req,res)=>{
   res.header('Content-Type','application/json;charset=utf-8')
   res.end(`您当前访问的是${req.url}`)
})
app.listen('4000',()=>{
 console.log('Server is  running on port 4000')
})