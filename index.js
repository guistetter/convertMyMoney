const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/", (req,res) => {
 return res.send("Ola mundo")
})

app.listen(port,(err) => {
  if(err){
    console.log("algo deu errado")
  } else {
    console.log("servidor rodando")
  }
})