const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req,res) => {
 return res.render("home")
})

app.use((req,res,next) => {
  return res.render("error")
})

app.listen(port,(err) => {
  if(err){
    console.log("algo deu errado")
  } else {
    console.log("servidor rodando")
  }
})