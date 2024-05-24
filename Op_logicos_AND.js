// AND -  chega 2 coisas sendo V = V : return bool 
let idade = 20;
let vistoVerificado = true;

console.log("---- Testando Op. Logicos: Caso 1----");
console.log("idade do passageiro é " + idade);
console.log("visto verificado? " + vistoVerificado);

if (idade >= 18 && vistoVerificado === true){
    console.log ("\npermissão concedida\n")
}
else {
    console.log("\npermissão negada\n")
}

// AND caso2 : chega 2 coisas sendo V = V

let numMoedas = 200;
let nivelPlayer = 30;

console.log("---- Testando Op. Logicos: Caso 2 ----");
console.log("num moedas " + numMoedas + "\nnivel player " + nivelPlayer);

if (numMoedas === 200 && nivelPlayer === 30){
    console.log ("Pode passar de nivel")
}
else {
    console.log ("Não passa de nivel")
}