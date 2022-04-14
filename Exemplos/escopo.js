//arquivo inteiro escopo global

const { SourceMap } = require("module")

let semana

function falaDia(){
  const dia = 'quarta'
  console.log(dia)
} //escolo local

semana = 'terceira semana'

function dizDia(dia){
 dia = 'quarta'
} //escopo local

//passo
//passo2

function soma(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4
}

console.log(soma(4, 5, 9, 30))//48


//lexico

const multiplica = 3 * 4
