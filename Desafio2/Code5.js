const saldoInicial = parseInt(gets());  // Lê o saldo inicial do jogador
const resultadoUltimoRound = gets();  // Lê o resultado do último round
const custoItem = parseInt(gets());  // Lê o custo do item que o jogador deseja comprar

function ajustarSaldo(saldoInicial, resultadoUltimoRound) {
    let novoSaldo;
    
    if (resultadoUltimoRound === "ganhou") {
        novoSaldo = saldoInicial * 1.15; //15%
    } else if (resultadoUltimoRound === "perdeu") {
        novoSaldo = saldoInicial * 1.05; //5%
    } else if (resultadoUltimoRound === "bônus") {
        novoSaldo = saldoInicial * 1.20; //20%
    }
    
    return Math.round(novoSaldo);  // Arredonda o saldo para o valor inteiro mais próximo
}

function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {
    
    const novoSaldo = ajustarSaldo(saldoInicial, resultadoUltimoRound);
    
    if (novoSaldo >= custoItem) {
        print("Comprar");
    } else {
        print("Economizar");
    }
}

// Chama a função para decidir se deve comprar ou economizar
decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem);
