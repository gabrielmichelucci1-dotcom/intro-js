/* um laço de repetição ou loop é uma estrutura que faz um bloco de código ser executado várias vezes */

// principais laços de repetição
/* 1 - for = utilizamos esse laço de repetição quando sabemos quantas vezes desejamos repetir algo

for(inicio; condição; incremento ){
 //código executado
}
*/

for (let i = 0; // começa em 0
    i < 5; // funciona ENQUANTO isso for verdadeiro
    i++ //aumenta +1 a cada volta
) {
    console.log(i)
}

// exemplo de laço de repetição com tabuada
let numeroDaTabuada = 9

for (let index = 1; i <= 10; i++) {
    // "Olá" + "Gabriel" + "é foda" + "demais
    console.log(`${numeroDaTabuada} x ${i} = $ {numeroDaTabuada * i}`)
}

// 2 - laço While = é um laço de repetição que executa um bloco de código ENQUANTO uma condição for verdadeira
// Utilizamos o While(enquanto) quando vc n sabe quantas vezes vai precisar repetir aquele código

/*

while(condição){
//código a ser executado
}
*/

// while(true){
//console.log("olá Gabriel é foda")// }

// 1 criar variavel de controle
let i = 0

while (i < 5) {
    console.log(i)

    // 2 - atualiza a variavel de controle
    i++;
}



// exemplo em um sistema de login
let senha = prompt("digite a senha:")

while(senha !== "1234"){
    senha = prompt("Senha Incorreta. Tente novamente:")

    console.log(senha)
}

//3 - do...while - parecido com o while, mas cm uma diferença importante

/*
do {
 //código a ser executado
}while(condição)

*/

// 1 - criando a variavel de controle
let numero = 1
do{
    console.log(numero)

    // 2 - atualizando a variavel de controle
    numero++
} while (numero <= 5)

    // exemplo com menu de opções
    let opcao

    do{
        console.log("1 - ver saldo")
        console.log("2 - sair")

        opcao = 2
    } while (opcao !==2)

        
