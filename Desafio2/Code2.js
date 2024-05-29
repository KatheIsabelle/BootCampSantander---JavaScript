const nome = gets();
const nivel = parseInt(gets());

MensagemGuerreiros();

function MensagemGuerreiros() {
  if (nivel >= 40) {
    print("Parabéns, valente " + nome + "! Sua coragem e habilidade são notáveis!");
  } else if (nivel >= 30 && nivel < 40) {
    print("Quase lá, " + nome + "! Continue treinando!");
  } else {
    print("Ainda é cedo, jovem " + nome + ". Treine mais!");
  }
}
