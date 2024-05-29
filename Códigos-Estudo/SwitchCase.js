//SwitchCase Estrutura


//Switchcase String

console.log("\n ------ Switchcase String ------")
let fruta = "morango";

switch(fruta){

    case "laranja":
        console.log("Suco de " + fruta);

    //bloco com 3 casos possiveis. 3 possibilidades de mesmo case.  
    case "banana":
    case "morango":
    case "limao":
        console.log("Suco de " + fruta);
        break;  //senão entraria no caso da uva
    case "uva":
        console.log("Suco de " + fruta);
        break;
    
    //caso padrao, resposta padrao. Para qualquer outro caso.  
    default:
        console.log("suco qualquer");
}


// SwitchCase usando numeros
console.log("\n ------ Switchcase Números ------")
let numero = 5;

switch(numero){

    case 1:
        console.log("Este caso é " + numero);
        break;

    case 2:
        console.log("Este caso é " + numero);
        break; 
    case 3:
        console.log("Este caso é " + numero);
        break;
    
    //caso padrao, resposta padrao. Para qualquer outro caso.  
    default:
        console.log("qualquer outro caso");
}
