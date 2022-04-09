//Utilizando os conceitos que estudamos, vamos criar um programa 
//que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, 
//para números divisíveis por 3 irá impirmir 'Fizz' e 
//para números divisíveis por 5 irá imprimir 'Buzz' e por fim, 
//se não cumprir nenhum dos casos acima imprime o próprio número. 

const numero = 7  //15 // 10 //9 //7
//que um numero é divisel
if (numero % 3 == 0 && numero % 5 == 0) {
  console.log('FizzBuzz')
} else if (numero % 3 == 0) {
  console.log('Fizz')
} else if (numero % 5 == 0) {
  console.log('Buzz')
} else {
  console.log(numero)
}