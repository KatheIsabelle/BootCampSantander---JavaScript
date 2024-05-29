let nomesCliente = ["cliente1","cliente2","cliente3","cliente4"];
let clientesAtivo = true;

//chamando main
main();

//funcao main chama todas as funcoes
function main(){
    cadastraCliente();
}

function cadastraCliente(){

    if (clientesAtivo){
        for (i=0; i<nomesCliente.length;i++){
            console.log("cadastrando cliente numero" + i);
        }
    }
    else{
        console.log("clientes inativos");
    }

}