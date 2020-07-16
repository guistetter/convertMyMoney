const api = require("./api-bancoCentral")
const axios = require("axios")

jest.mock("axios")

test("getCotacaoApi", () => {
  const res = {
    data:{
      value:[
        {cotacaoVenda: 3.90 }
      ]
    }
  }
  axios.get.mockResolvedValue(res)
  api.getCotacaoApi("04-04-2019").then(resp => {
    expect(res).toEqual(res)
  })
})