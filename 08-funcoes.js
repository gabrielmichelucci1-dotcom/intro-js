//uma função é um bloco de código reutilizavel
// executa uma tarefa especifica
// funções são chamadas/invocadas

/*

function nomeDaFuncao(){
 //código da função
}

*/

// 1 - criando a função
function saudacao (){
    document.body.innerHTML = "Olá, bem vindo"
}

// 2 - para a função funcionar/executar, precisamos chama-la/invoca-la
saudacao()


/// função com parâmetros 
function cumprimento(nomeDoUsuario){
    document.body.innerHTML = "Olá, bem vindo(a)" + nomeDoUsuario
}

cumprimento ("Gabriel Michelucci")

let user = false
if (user === true){
    cumprimento ("Gabriel Michelucci")
}else {
    document.body.innerHTML = "credenciais inválidas"
}

function soma(a,b){
    document.body.innerHTML = a + b
}
soma(8,20)
soma("Olá ", "Gabrirl") //Olá + Gabriel = Olá Gabriel

/* Exemplo de função com retorno e validação de dados */
function multiplicar(a,b){
    If(a === undefined);{
  document.body.innerHTML = "por favor digite dois numeros o numero A"
  return
    }

    if(b === undefined){
document.body.innerHTML = "por favor, digite o numero B"
  return
    }
//Number = é uma função usada para converter valores para números
// isNaN = é uma função que serve para verificar se o valor é NaN (Not a Number)

    // typeof = é um operador JavaScript que serve para DESCOBRIR O TIPO DE UM VALOR OU UMA VARIAVEL
    // o operador !==(diferente) avalia se o elemento é diferente do tipo e valor
    if(typeof a !== "number"){
        document.body.innerHTML = "O valor precisa ser um número"
    }

    if(typeof b !== "number"){
        document.body.innerHTML = "o valor de B precisa ser um número"
    }


    if(Number.isNaN(a)){
    document.body.innerHTML = "Número inválido"
    return
    }

    if(Number.isNaN(b)){
    document.body.innerHTML = "Número inválido"
    return
    }
 // `` = template literals
  document.body.innerHTML = `o resultado da multiplicação entre ${a} e ${b} é igual a ${a * b}`

  "o resultado da multiplicação entre" + a + "e" + b + "é igual a" + a * b
}


multiplicar(a = 8, b = 7)
