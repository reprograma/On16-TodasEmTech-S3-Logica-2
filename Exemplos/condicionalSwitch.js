//se for fevereiro é carnaval
//se for junho //são joão
//se for dezembro // natal

function resultadoFesta(mes) {
  switch (mes) {
    case 'fevereiro':
      return 'é carnaval'
      break
    case 'junho':
      return 'é são joão'
      break
    case 'dezembro':
      return 'é natal'
      break
    default:
      return 'não é festa'
  }
}

console.log(resultadoFesta('fevereiro'))
// console.log(resultadoFesta('fevereiro'))