// const express = require('express')
// const  app = express()

// app.get('/',(req, res)=> {
//     res.send("hello world from express")
// })

// app.listen(3000)

const fs = require('fs')
const fileName = "target.txt"

const errHandler = err=>console.log(err)
const dataHandler = data=>console.log(data.toString())

fs.readFile(fileName,(err,data)=>{
    if(err){
      errHandler
    }
    dataHandler(data)
})

console.log("hello")