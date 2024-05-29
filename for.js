// for executa até valor de parada 10, sai do laço após isso
console.log("----- situação 1 FOR -----");
console.log("contagem até 10")
for (let count = 0; count <10; count++){
    console.log(count);
}

// situação usando FOR
console.log("----- situação 2 FOR -----");
console.log("repeticao de acao");
let pontosDeVida = 0;

for (let i = 0;   i < 10;   i++){
    pontosDeVida +=1;
    console.log("Tomou poção " + i);
}

console.log("Ponto total final " + pontosDeVida);


