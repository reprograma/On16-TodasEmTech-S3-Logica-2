// const cor = 'amarelo'

// if (cor == 'vermelho') {
//   console.log('pare')
// } else if (cor == 'amarelo') {
//   console.log('atenção')
// } else if (cor == 'verde') {
//   console.log('siga')
// } else {
//   console.log('não tem essa cor')
// }

function informaTransito(corFarol) {
  switch(corFarol) {
    case 'vermelha':
      return 'Pare'
    case 'amarela':
      return 'Atenção'
    case 'verde':
      return 'Siga'
    default :
      return 'Não tem essa cor'
  }
}

console.log(informaTransito('VERMELHO)'.toLocaleLowerCase()))
console.log(informaTransito('vermelha'))
