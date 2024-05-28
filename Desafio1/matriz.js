//usando for para criar
let matriz = [[], [], []];
let preenche = 0;

for (c = 0; c < 3; c++) {
    for (l = 0; l < 4; l++) {
        preenche++;
        matriz[c][l] = preenche;
    }
}

console.log(matriz);
