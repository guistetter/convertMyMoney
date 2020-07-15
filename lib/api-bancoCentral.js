const axios = require("axios")

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoApi = data => axios.get(getUrl(data))
const extractCotacao = res => res.data.value[0].cotacaoVenda

const getToday = () => {
  const today = new Date()
  return (today.getMonth()+1)+"-"+today.getDate()+"-"+today.getFullYear()
  //console.log(today.getDate(), today.getFullYear(), today.getMonth())
}

const getCotacao = async () => {
  try{
  const today = getToday()
  console.log(today)
  const res = await getCotacaoApi(today)//'04-12-2019'
  const cotacao = extractCotacao(res)
  return cotacao

  }catch(err){
    return ""
  }
}

module.exports = {
  getCotacaoApi,
  getCotacao,
  extractCotacao
}