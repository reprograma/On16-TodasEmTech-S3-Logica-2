//Crie uma função que calcula 5% 
//de desconto retornando 
//o valor do desconto.

function calculaCincoPorCentoDesconto(valor) {
  const resultado = valor * (5/100)
  return `O valor do desconto com 5% é ${resultado}`
}

console.log(calculaCincoPorCentoDesconto(500)) //25