# Lógica Aplicada - Estrutura condicional, Escopo e Função 🚀

**Semana 3 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**

- Aprendizado de funções e escopo;
- Aprendizado de estrutura condicional.

<br>
<br>


## Plano da aula:
------
### 0. Chamada, apresentação das monitoras e acordos
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>

### 1. Funções

1. Conceito
1. O que são funções?

    "São ações executadas assim que são chamadas ou em decorrência de algum evento."
    "Uma função pode receber parâmetros e retornar um resultado."

    Na oficina, a gente colocou no html uma chamada pra ação que ocorria quando o botão de calcular era clicado. No arquivo js criamos a função abaixo:

```
    function clicar() {
        resposta.innerHTML = input.value
    }
```
- chamada -> no evento de clique
- parâmetros -> nao recebiamos 
- ação -> Pegar o valor digitadi do input e fazer aparecer na tela no elemento resposta
- retorno -> texto na tela com sucesso

A verdade é que na vida real, todas nós temos também tarefas e rotinas que seguem alguns critérios.

Exemplo jogar o lixo. Todas as segundas, quartas e sextas, eu posso jogar lixo organico.
Todas as tercas e quintas, eu posso jogar o lixo reciclável.

- chamada -> nos dias referentes 
- parâmetros -> dia
- ação -> separar o lixo, amarrar o saco, levar até ao local destinado
- retorno -> dia informando qual lixo jogar

E trazendo isso para o mundo do javascript, podemos criar um programa que me lembra de jogar o lixo corretamente. Vamos lá?

```  
function jogarLixo(dia) {
    if(dia === 'segunda'|| dia === 'quarta' || dia ==='sexta'){
        console.log('lixo organico') 
    } else if (dia === 'terca'|| dia === 'quinta') {
        console.log('lixo reciclavel')
    } else {
        console.log('nao pode jogar lixo')
    }  
    
    return dia 
}

let qualTipoJogarHoje = jogarLixo('sabado')
console.log(qualTipoJogarHoje)
```

2. Por que (Quando) utilizar?
Quando precisamos de uma instrução, uma ação que pode ser executada em diferentes momentos no nosso código.

2. Declaração
- Usamos a palavra reservada function
- Podemos dar um nome ou deixá-la anônima
- não esequecer de usar os parenteses, nele podemos passar parametros ou nao
- e dentro das chaves colocamos as instruções que podem ter um retorno ou não

3. Parâmetros
São informacões que se comportam como variaveis dentro daquela função e que podem ser usadas nas instruções

4. Retorno
Usando a palavra reservada return podemos, instruir nosso código a retornar algo.

5. Nomeando funções
- Sempre prefira usar verbos que descrevem exatamente o que a sua função irá fazer. 
- Não se preocupe se os nomes ficarem grandes, desde que sejam descritivos o suficiente.
- Use também o camelcase, quando usamos a segunda palavra com a primeira letra maiuscula.


### 2. Escopo

1. Conceito
Refere-se ao lugar em seu algoritmo ou função.

2. Escopo Global
Refere-se ao arquivo atual do js.

3. Escopo Local ou de Bloco
Refere-se à função ou aquele bloco de código.

Lembrete: Var não respeita escopo de bloco

4. Escopo Léxico

Um variavel recebe um indetificador único (nome) e o trecho de código que retorna quando ela é recuperada é o escopo léxico.

### 3. Condicional:
São instruções de controle que podemos usar ao construir nossos códigos. Vamos estudar estudar 2 estruturas condicionais: if...else e switch.

- Podemos usar **if** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira.

```
let num = 1
if (num ===1) {
    console.log('num é igual a 1')
}
```

- Podemos usar **if...else** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira. Ou outro bloco de código, somente caso a condição seja falsa.

```
let number = 0
if (number ===1) {
    console.log('number é igual a 1')
} else {
    console.log(`number não é igual a 1, o valor de number é ${number}`)
}
```

- Além disso para diferentes condições podemos usar vários **if...else** se quisermos executar vários blocos de códigos diferentes.

```
let mes = 'setembro'
if (mes === 'fevereiro') {
    console.log('tem carnaval')
} else if (mes === 'junho'){
    console.log('tem são joão')
} else if (mes === 'dezembro'){
    console.log('tem natal')
} else {
    console.log(`${mes} não é um mês festivo.`)
}
```

- Agora, se a condição que estivermos avaliando for a mesma que a anterior, porém com valores diferentes, podemos usar a instrução **switch**:

```
let diaDaSemana = 'segunda'
switch (diaDaSemana) {
    case 'domingo':
        console.log('Domingou')
        break
    case 'sábado':
        console.log('Sabadou')
        break
    case 'sexta':
        console.log('Sextou')
        break
    default: 
        `${diaDaSemana} não é um dia festivo.`
}
```

Atenção para as palavras reservadas case, break e default. 


<br>



<br>

#### 4. **Exemplos:**

| Exemplo 01 | Descrição |
| --- | --- |
| `Semaforo, sinal ou sinaleira?` | Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito. |

| Exemplo 02 | Descrição |
| --- | --- |
| `FizzBuzz` | Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. |

| Exemplo 03 | Descrição |
| --- | --- |
| `É dia de aula?` | Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma. |

| Exemplo 04 | Descrição |
| --- | --- |
| `IMC` | Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. |

| Exemplo 05 | Descrição |
| --- | --- |
| `Par ou Impar` | Crie uma função que determina se um número é par ou impar.  |

| Exemplo 06 | Descrição |
| --- | --- |
| `Conversor de temperatura` | Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit. |

| Exemplo 07 | Descrição |
| --- | --- |
| `Multiplica` | Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre else. |

| Exemplo 08 | Descrição |
| --- | --- |
| `Porcentagem` | Crie uma função que calcula 5% de desconto retornando o valor do desconto.|

| Exemplo 09 | Descrição |
| --- | --- |
| `Conversor de moeda` | Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia. |

| Exemplo 10 | Descrição |
| --- | --- |
| `Calculadora` |Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

    a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
    b) Deverá ser possível passar 2 números para a operação escolhida
    c) Deverá retornar o resultado e imprimir no console


<br>


---
**Desafio entregavel:**

#### Calma! É só uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Resolva as questões abaixo: 

> Passo a passo:
1) Crie uma pasta que irá conter um arquivo com extensão .js para cada questão abaixo e apenas um README.md

```
1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  - Se a media for igual ou maior que 7 - Aprovado
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
  - Se a media for menor que 5 - Reprovado

4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

```

2) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou. Suba o link do seu repositório no classroom da turma na entrega da semana.  A entrega pode ser feita até sexta.
3) Tente fazer antes da aula de revisao e plantao de monitoria, pois você consegue aproveitar melhor pra tirar dúvidas.
4) Arraseee! E qualquer coisa, me chama!

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [youtube](https://www.youtube.com/channel/UCGaPf6u8sp-yd5BvOS3du0g)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
