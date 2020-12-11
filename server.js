const Vue = require('vue')
const express = require('express')
const render = require('vue-server-renderer').createRenderer()

const app = express()

app.get('*',(req,res)=>{
  const app = new Vue({
   data:{
    url:req.url,
   },
   template:`<h1>您当前访问的是:{{url}}</h1>` 
  })
  render.renderToString(app,(err,html)=>{
    res.header('Content-Type','text/html;charset=utf-8')
    if(err){
     res.status(500).end('服务器发生未知错误')
     return
    }  
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head><title>Hello</title></head>
      <body>${html}</body>
    </html>
    `)
  })
  res.end(`您当前访问的是${req.url}`)

})
app.listen('4000',()=>{
 console.log('Server is  running on port 4000')
})