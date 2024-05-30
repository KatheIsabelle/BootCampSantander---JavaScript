// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.
  
const classe = gets();

// TODO: Implemente os demais casos para a resolução do desafio
switch(classe) {
  case "Guerreiro":
      print("Você escolheu a classe Guerreiro!");
      break;
    
  case "Mago":
      print("Você escolheu a classe Mago!");
      break;
  
  case "Arqueiro":
      print("Você escolheu a classe Arqueiro!");
      break;
    
  default:
      print("Você escolheu uma classe inválida classe. As opcões válidas são Guerreiro, Mago ou Arqueiro");
      break;
}