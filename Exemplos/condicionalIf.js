// function comprovaMaiorIdade(idade) {
//   if (idade >= 18 ) {
//     console.log('maior de idade')
//   } else {
//     console.log('menor de idade')
//   }
// }

// console.log(comprovaMaiorIdade(6)) //menor
// console.log(comprovaMaiorIdade(46)) //maior

//média e titulo de eleitor

function resultadoBoletim(nota1, nota2, nota3, nota4) {
  const media = (nota1 + nota2 + nota3 + nota4)/4

  if(media >= 7 && media <= 10) {
    return `Aprovada, sua média é ${media}`
  } else if (media >= 4 && media < 7) {
    return `Recuperação, sua média é ${media}`
  } else if (media < 4 && media >= 0) {
    return `Reprovada, sua média é ${media}`
  }
}

console.log(resultadoBoletim(3, 3.8, 2, 1))


//titulo de eleitora

function permiteTitulo(idade) {
  if ((idade >=16 && idade < 18) || idade >= 70) {
    return `É permitido, sua idade é ${idade}`
  } else if (idade >= 18 && idade < 70) {
    return `É obrigatório, sua idade é ${idade}`
  } else {
    return 'Procure o TRE'
  }
}

console.log(permiteTitulo(19))//
console.log(permiteTitulo(77))//
console.log(permiteTitulo(15))//
console.log(permiteTitulo(true))//