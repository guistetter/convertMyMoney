const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000

const convert = require('./lib/convert')
const apiBCB = require("./lib/api-bancoCentral")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"public")))

app.get("/", async (req,res) => {
  
  const cotacao = await apiBCB.getCotacao()
  console.log("cotacao", cotacao )

 return res.render("home",{
   cotacao
 })

})

app.get("/cotacao", (req,res) => {
  //console.log(req.query)
  const { cotacao, quantidade } = req.query 
  if(cotacao && quantidade){
    const conversao = convert.convert(cotacao, quantidade)
    res.render("cotacao",{
      error: false,
      cotacao: convert.toMoney(cotacao),
      quantidade: convert.toMoney(quantidade),
      conversao: convert.toMoney(conversao)
    })
  } else {
    res.render("cotacao",{
      error: "valor invalido"
    })
  }
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