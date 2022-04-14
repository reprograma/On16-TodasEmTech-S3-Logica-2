//Crie uma função que determina se um número é par ou ímpar.

function determinaParOuImpar(numero) {
  if (numero % 2 == 0) {
    return `${numero} é par.`
  } else {
    return `${numero} é ímpar.`
  }
}

const resultado = determinaParOuImpar(50) //é par ou ímpar
console.log(resultado)