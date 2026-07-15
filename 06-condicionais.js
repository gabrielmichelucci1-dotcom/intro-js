// condicionais são estruturas de controle que permitem executar diferentes blocos de código com base em condições específicas. Em JavaScript, as principais estruturas condicionais são `if`, `else if`, `else` e o operador ternário.

// as estruturas condicionais permitem que o programa tomem decisões.

// 1 - if/se simples
/* if (condição) { //código
} */

if (false){
    console.log("seja bem vindo(a)");
}

console.log("depois do if");

// 2 - if...else/se senão
/*
if (condição) { //código
} else { //código
}
*/

let idade = 16
if (idade >= 18){
    console.log("você é maior de idade");
} else {
    console.log("você não é maior de idade");
}

    let user = false
    if (user === true){
        console.log("usuário logado");}
        else {
            console.log("usuário não logado");
        }


        //3 - if...eslse if - se/senão se
        /*
        if (condição) { //código}
        } else if (outra condição) { //código}
         */

        // serve para testar várias condições
        let nota = 7

        if (nota >= 9){
            console.log("excelente");
        } else if (nota >= 7){
            console.log("bom");
        } else if (nota >= 5){
            console.log("regular");
        } else if (nota >= 3){
            console.log("ruim");
        }