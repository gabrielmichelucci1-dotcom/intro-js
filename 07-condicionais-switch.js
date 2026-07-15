//document.body.innerHTML = "testando"
// switch/case 
// o switch case é mais organizado quando vc precisa verificar se uma variável é igual a UM entre VÁRIOS VALORES

/*

switch(condição){
case 1:
    //código do case 1
    
    case 2:
        //código do case 2
    }

*/

let dia = 14

switch (dia) {
    case 14:
    document.body.innerHTML = "terça-feira"
    break //serve para impedir que o pragrama 

    case 15:
        document.body.innerHTML = "Quarta-Feira. Aula de Projeto"
        

        case 16:
            document.body.innerHTML = "Quinta-Feira. Aula de JS"
            break

}
    defaut:
     // funciona cono um plano b caso nenhuma das opçoes acima seja atendida
    document.body.innerHTML = "data inválida"