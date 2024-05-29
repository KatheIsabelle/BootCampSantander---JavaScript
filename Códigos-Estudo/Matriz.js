//estrutura para matriz, indicado para dados de tipos variados
//usando array

// MATRIZ 5x4
let infoClientesMatriz = [

    ["Kathe", 28, "Barão de Butui", "Brazil"],
    ["Fulano1", 29, "Rua 1", "Brazil"],
    ["Fulano2", 30, "Rua 2", "Brazil"],
    ["Fulano3", 33, "Rua 3", "Brazil"],
    ["Fulano4", 35, "Rua 4", "Brazil"],

]


console.log("Conteúdo Linha 0 | Coluna 0")
console.log(infoClientesMatriz[0][0]) // Linha 0 Coluna 0

console.log("Conteúdo Linha 1 inteira")
console.log (infoClientesMatriz[1]) // Linha 1 inteira

//estrutura para vetor: pode armazenar diferentes
//tipos de dados, mas preferivel botar dados do msm tipo
let infoClientesVetor = ["KatheIsabelle", "Fulano1", "Fulano2"] 





// CARACTERISTICAS DO ARRAY
console.log("tamanho do vetor:" + infoClientesVetor.length)

// CARACTERISTICAS DA MATRIZ
console.log("tamanho da matriz:" + infoClientesMatriz.length)