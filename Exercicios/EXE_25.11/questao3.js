//11 Questão
const produtos = [
    { nome: "Notebook", preco: 2500.00 },
    { nome: "Mouse", preco: 50.00 },
    { nome: "Teclado", preco: 150.00 },
    { nome: "Monitor", preco: 800.00 },
    { nome: "Headset", preco: 90.00 }
];

console.log(produtos.filter(produto => produto.preco > 100))

//12 Questão
const listaAlunos = [
    { nome: "Ana Costa", status: true },
    { nome: "Bruno Lima", status: false },
    { nome: "Carla Pereira", status: 'true' }
];

console.log(listaAlunos.filter(alunos => alunos.status === true))

//13 Questão
const livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis"},
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis"},
    { titulo: "Grande Sertão: Veredas", autor: "João Guimarães Rosa"},
    { titulo: "O Cortiço", autor: "Aluísio Azevedo"},
    { titulo: "Vidas Secas", autor: "Graciliano Ramos"},
    { titulo: "Capitães da Areia", autor: "Jorge Amado"},
    { titulo: "A Hora da Estrela", autor: "Clarice Lispector"},
    { titulo: "O Guarani", autor: "José de Alencar"},
    { titulo: "Quarto de Despejo", autor: "Carolina Maria de Jesus"}
];

console.log(livros.filter(livro => livro.autor === "Machado de Assis"))

//14 Questão
const listaDeCarros = [
  { marca: "Ferrari", ano: 2020},
  { marca: "Ford", ano: 1993},
  { marca: "Fiat", ano: 2022},
  { marca: "Tesla", ano: 2023},
  { marca: "Volkswagen", ano: 2019}
];

console.log(listaDeCarros.filter(carro => carro.ano > 2020))

//15 Questão
const listaDeTarefas = [
  { descricao: "Estudar JavaScript", concluida: false},
  { descricao: "Fazer compras no supermercado", concluida: true},
  { descricao: "Responder e-mails do trabalho", concluida: false},
  { descricao: "Passear com o cachorro", concluida: true}
];

console.log(listaDeTarefas.filter(tarefa => tarefa.concluida === false))