//Crie uma função que irá converter 
//uma quantia de real para dolar 
//utilizando a cotação do dia.
//4.68

function calculaRealParaDolar(real) {
  const cotacao =  4.68
  const resultadoEmDolar = real / cotacao
  return `Real: ${real} para dolar: ${resultadoEmDolar.toFixed(2)}`
}

console.log(calculaRealParaDolar(1000))//213.68