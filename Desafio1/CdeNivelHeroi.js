//var nome do heroi + quantidade de xp do heroi
let nomeDoHeroi = "Jorgin"
let xpDoHeroi = 6003;

// array rankings do heroi
let rankingDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// laço percorre ranking + estrutura conficional if else para classificar o heroi
for (let i = 0; i < rankingDoHeroi.length; i++) {
    if (xpDoHeroi <= 1000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Ferro! ");
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Bronze! ");
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Prata! ");
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Ouro! ");
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Platina! ");
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Ascendente! ");
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Imortal! ");
    } else {
        xpDoHeroi >= 10001;
        console.log(nomeDoHeroi + " tem XP " + xpDoHeroi + " e possui classificação Radiante! ");
    }
}