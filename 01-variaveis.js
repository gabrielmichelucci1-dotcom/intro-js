// comentario no javascript
// variaveis são espaços onde o programama guarda uma informação para poder usar depois

// no javascript, temos 3 formas de declarar uma variavel: var, let e const

// var é a forma mais antiga de declarar uma variavel, e não é mais recomendada, pois ela tem alguns problemas que podem gerar bugs no seu código
var fruta = "banana"; // string
console.log(fruta) 


// let é a forma mais moderna de declarar uma variavel, e é a forma recomendada de declarar variaveis que podem mudar de valor
let nomedapessoa = "Gabriel"; // string
let number = 19; // number
//redeclarando uma variavel do tipo let//
let nome = "Gabriel" 
console.log(nomedapessoa); // imprime no console o valor da variavel nome

// const é a forma de declarar uma variavel que não pode mudar de valor, ou seja, ela é constante
const PI = 3.1415; // number
const nomedapessoa = "Gabriel Michelucci"; // string
console.log(nomedapessoa); // imprime no console o valor da variavel nomedapessoa