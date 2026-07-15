console.log("Olá mundo!"); 
// os tipos de dados primitivos do javascript são: string, number, boolean, null, undefined e symbol

// 1 string - cadeia de caracteres, ou seja, um texto
let nome = "Gabriel";
let sobrenome = 'Michelucci';

console.log(nome);

//2 number - serve para armazenar números, podem ser inteiros ou decimais
let idade = 19;
let altura = 1.75;

//3 bigint - serve para armazenar números inteiros muito grandes, que não podem ser representados pelo tipo number
let bigInt = 1234567890123456789012345678901234567890n;

//4 boolean - serve para armazenar valores verdadeiros ou falsos
let verdadeiro = true;
let falso = false;

// 5 undefined - é um tipo de dado que representa a ausência de valor, ou seja, quando uma variavel é declarada mas não recebe nenhum valor, ela é undefined
let nomepessoa;
console.log(nomepessoa);

// 6 null - é um tipo de dado que representa a ausência de valor, ou seja, quando uma variavel é declarada e recebe o valor null, ela é null
let nome = null;

// 7 symbol - é um identificador único  uso mais comum é em bibliotecas de códigos avançados
const id1 = Symbol("@");
const id2 = Symbol("id");
console.log(id1);
console.log(id2);
