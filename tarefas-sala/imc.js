// const pesoKg = 80
// const alturaM = 1.7
// const alturaAoQuadrado = Math.pow(alturaM, 2)
// const valorImc = (pesoKg / alturaAoQuadrado)
// console.log(`O resultado é ${valorImc.toFixed(2)}`)

function calculaIMC(peso, altura) {
  const alturaAoQuadrado = Math.pow(altura, 2)
  const valorIMC = peso / alturaAoQuadrado

  return `O resultado é ${valorIMC.toFixed(2)}`
}

console.log(calculaIMC(80, 1.7))