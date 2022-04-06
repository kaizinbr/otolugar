// A ser substituido por bd
export let pontos = [
];

// Objeto Ponto
// function Ponto(nome, descricao, endereco, valor, imagem, altImagem) {
//   // Criar função createId();
//   this.id = createId();
//   this.nome = nome;
//   this.descricao = descricao;
//   this.imagem = imagem;
//   this.altImagem = altImagem;
//   this.avaliacaoUsuario = 0;
//   this.endereco = endereco;
//   this.valor = valor;

//   // Irá pegar id do oferecedor, ainda precisa implementar login
//   this.of_id = 0;
// }

export function getId() {
  return pontos.length + 1;
}