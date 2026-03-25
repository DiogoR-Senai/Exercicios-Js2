const prompt = require("prompt-sync")();
/*
Exercicio 1

Crie um objeto carro com as propriedades:
marca, modelo, ano
*/

// const carro = {
//     marca: "Audi",
//     modelo: "RS6",
//     ano: 2023
// }
// console.log(carro)

/*
Exercicio 2

Crie um objeto aluno com:
nome, idade

Depois altere a idade para outro valor.
*/

// const aluno = {
//     nome: "Diogo",
//     idade: 21
// }
// console.log(aluno)
// aluno.idade = 22;
// console.log(aluno)

/*
Exercicio 3

Crie um objeto produto com:
nome, preco
Exiba uma frase:
O produto X custa R$ Y
*/

// const produto = {
//     nome: "Celular",
//     preco: 6000,
//     function () {
//         console.log("O produto " + this.nome + " custa R$" + this.preco);
//     }
// }
// produto.function()
// console.log(produto)

/*
Exercicio 4

Crie um objeto pessoa com:
nome
Depois adicione dinamicamente a propriedade idade.
Acesse uma propriedade usando:
notação ponto (obj.prop)
notação colchetes (obj["prop"])
*/

// const aluno = {
//     nome: "Diogo",
//     idade: 0
// }

// aluno.idade = 21;
// console.log(aluno.idade)
// console.log(aluno["idade"])

/*
Exercicio 5

Crie um objeto pessoa com nome e idade e mostre os valores no console.
*/
// const pessoa = {
//     nome: "Diogo",
//     idade: 21,
// }
// console.log(pessoa);

/*
Exercicio 6

Crie um objeto carro com marca, modelo e ano e mostre a frase "Carro: Ford Ka - 2015".
*/
// const carro = {
//     marca: "Audi",
//     modelo: "RS6",
//     ano: 2023,
//     function () {
//         console.log("Carro: " + this.modelo + " - " + this.ano);
//     }
// }

// console.log(carro)
// carro.function()

/*
Exercicio 7

Altere o valor da propriedade preço no objeto produto de 50 para 80.
*/
// const produto = {
//     nome: "Risoli",
//     preco: 50,
//     function () {
//         console.log("O produto " + this.nome + " custa R$" + this.preco);
//     }
// }
// produto.function()
// console.log(produto)
// produto.preco = 80;
// console.log(produto.preco)

/*
Exercicio 8

Adicione a propriedade nota no objeto aluno que possui apenas o nome.
*/
// const aluno = {
//     nome: "Diogo",
//     idade: 21,
//     nota: 8.5
// }
// console.log(aluno)

/*
Exercicio 9

Acesse as propriedades de um objeto usando notação ponto e colchetes.
*/
// const professor = {
//     nome: "thiago",
// }

// console.log(professor.nome)
// console.log(professor["nome"])

/*
Exercicio 10

Crie um objeto pessoa com um método falar() que mostre "Olá!".
*/

// const conversa = {
//     function () {
//         console.log("Olá!");
//     }
// }
// conversa.function()

/*
Exercicio 11

Crie um objeto com método usando this para mostrar "Meu nome é João".
*/
// const pessoa = {
//     nome: "Diogo",
//     idade: 21,
//     function () {
//         console.log("Meu nome é " + this.nome)
//     }
// }
// pessoa.function()
// console.log(pessoa);

/*
Exercicio 12

Crie um objeto produto com nome, preço e método desconto(porcentagem) que diminui o preço.
*/
// const produto = {
//     nome: "Bala",
//     preco: "10",
//     function () {
//         descontdo = this.preco * 0.10
//         console.log(this.preco - descontdo)
//     }
// }
// console.log(produto)
// produto.function()

/*
Exercicio 13

Crie um objeto aluno com nome e um array de notas e mostre todas as notas.
*/
// const aluno = {
//     nome: "Diogo",
//     notas: [7,8,9]
// }
// console.log(aluno);

/*
Exercicio 14

Percorra um objeto usando for...in e mostre suas propriedades.
*/
// const carro = {
//     marca: "Audi",
//     modelo: "RS6",
//     ano: 2023,
// }
// for(let carros in carro){
//     console.log(carros + ": " + carro[carros])
// }

/*
Exercicio 15

Crie um objeto aluno com nome, array de notas e método media() que retorna a média.
*/
// const aluno1 = {
//   nome: "Diogo",
//   notas: [7, 8, 9],
//   function() {
//     media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
//     console.log("A Media é: " + media);
//   },
// };

// console.log(aluno);
// aluno.function()

/*
Exercicio 16

Crie um array de objetos alunos com nome e nota e mostre apenas os aprovados (nota maior ou igual a 7).
*/
// const alunos = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Carlos", nota: 6 },
//   { nome: "João", nota: 7 },
//   { nome: "Marina", nota: 9 },
//   { nome: "Pedro", nota: 5 }
// ];
// const aprovados = alunos.filter(aluno => aluno.nota >= 7);

// console.log(aprovados);

/*
Exercicio 17

Crie um objeto contaBancaria com saldo e métodos depositar(valor) e sacar(valor).
*/
// const contaBancaria = {
//     saldo: 0,
//     depositar(Valor) {
//         Valor = parseFloat(prompt("Quanto voce Quer depositar: "));
//         this.saldo += Valor
//         return this.saldo
//     },
//     sacar (Valor){
//         Valor = parseFloat(prompt("Quanto voce quer sacar: "));
//         this.saldo += Valor
//         return this.saldo
//     }
// }
// console.log(contaBancaria)
// contaBancaria.depositar()
// contaBancaria.sacar()
// console.log(contaBancaria)

/*
Exercicio 18

Crie um objeto usuario com nome, logado (true/false) e métodos login() e logout().
*/

// const usuario = {
//   nome: "João",
//   logado: false,

//   login() {
//     this.logado = true;
//     console.log(`${this.nome} fez login.`);
//   },

//   logout() {
//     this.logado = false;
//     console.log(`${this.nome} fez logout.`);
//   }
// };

// usuario.login();
// usuario.logout();

/*
Exercicio 19

Crie um objeto pessoa com um objeto endereco dentro contendo cidade e estado e mostre a cidade.
*/

// const pessoa = {
//   nome: "Maria",
//   endereco: {
//     cidade: "Caxias do Sul",
//     estado: "RS"
//   }
// };

// console.log(pessoa.endereco);

/*
Exercicio 20

Crie um array de objetos produtos e filtre os produtos com preço maior que 100.
*/
// const produtos = [
//   { nome: "Teclado", preco: 80 },
//   { nome: "Mouse", preco: 50 },
//   { nome: "Monitor", preco: 900 },
//   { nome: "Headset", preco: 150 }
// ];

// const produtosFiltrados = produtos.filter(produto => produto.preco > 100);

// console.log(produtosFiltrados);

/*
Exercicio 21

Crie um objeto sistema com um array usuarios e um método adicionarUsuario(nome).
*/
//No mesmo objeto, crie um método listarUsuarios().
//Melhore o sistema para não permitir usuários duplicados.


// const sistema = {
//   usuarios: [],

//   adicionarUsuario(nome) {
//     const usuarioExiste = this.usuarios.some(
//       usuario => usuario.nome === nome
//     );

//     if (usuarioExiste) {
//       console.log(`Usuário ${nome} já existe.`);
//       return;
//     }

//     const novoUsuario = { nome };
//     this.usuarios.push(novoUsuario);
//     console.log(`Usuário ${nome} adicionado.`);
//   },

//   listarUsuarios() {
//     if (this.usuarios.length === 0) {
//       console.log("Nenhum usuário cadastrado.");
//       return;
//     }

//     this.usuarios.forEach((usuario, index) => {
//       console.log(`${index + 1}. ${usuario.nome}`);
//     });
//   }
// };

// sistema.adicionarUsuario("Ana");
// sistema.adicionarUsuario("Carlos");
// sistema.adicionarUsuario("Ana");

// sistema.listarUsuarios();

/*
Exercicio 22

Crie um objeto carrinho com array produtos e métodos adicionar(produto), remover(nome) e total().
*/

// const carrinho = {
//   produtos: [],
//   adicionar(produto) {
//     this.produtos.push(produto);
//     console.log(`${produto.nome} adicionado.`);
//   },
//   remover(nomeProduto) {
//     this.produtos = this.produtos.filter(
//       (p) => p.nome.toLowerCase() !== nomeProduto.toLowerCase()
//     );
//     console.log(`${nomeProduto} removido (se existia).`);
//   },
//   total() {
//     const total = this.produtos.reduce((soma, p) => soma + p.preco, 0);
//     return `Total: R$ ${total.toFixed(2)}`;
//   },
// };

// carrinho.adicionar({ nome: "Camisa", preco: 50.0 });
// carrinho.adicionar({ nome: "Tênis", preco: 150.0 });
// console.log(carrinho.total()); 

// carrinho.remover("Camisa");
// console.log(carrinho.total()); 

/*
Exercicio 23

Crie um sistema de notas que permita cadastrar alunos, calcular média e mostrar aprovados.
*/
// const escola = {
//   alunos: [],

//   cadastrarAluno(nome, notas) {
//     this.alunos.push({ nome, notas });
//   },

//   exibirRelatorio(mediaParaAprovacao = 7) {
//     console.log("--- RELATÓRIO FINAL ---");
    
//     this.alunos.forEach(aluno => {
//       const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
//       const media = soma / aluno.notas.length;
//       const status = media >= mediaParaAprovacao ? "APROVADO " : "REPROVADO ";

//       console.log(`${aluno.nome} | Média: ${media.toFixed(1)} | Status: ${status}`);
//     });
//   }
// };

// sistemaNotas.cadastrarAluno("Ana Silva", [8.5, 9.0, 7.5]);
// sistemaNotas.cadastrarAluno("João Souza", [5.0, 6.5, 4.0]);
// sistemaNotas.cadastrarAluno("Carla Dias", [7.0, 7.0, 8.0]);

// sistemaNotas.exibirRelatorio();

/*
Exercicio 24

Crie um mini banco com múltiplas contas e permita transferências entre elas.
*/

// class ContaBancaria {
//   constructor(titular, saldoInicial = 0) {
//     this.titular = titular;
//     this.saldo = saldoInicial;
//     this.numero = Math.floor(Math.random() * 10000);
//   }

//   depositar(valor) {
//     if (valor > 0) {
//       this.saldo += valor;
//       console.log(`${this.titular}: Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
//     }
//   }

//   sacar(valor) {
//     if (valor > 0 && valor <= this.saldo) {
//       this.saldo -= valor;
//       console.log(`${this.titular}: Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
//       return true;
//     } else {
//       console.log(`${this.titular}: Saldo insuficiente ou valor inválido.`);
//       return false;
//     }
//   }

//   transferir(valor, contaDestino) {
//     console.log(`\n--- Tentando transferência de ${this.titular} para ${contaDestino.titular} ---`);
//     if (this.sacar(valor)) {
//       contaDestino.depositar(valor);
//       console.log("Transferência concluída com sucesso.");
//     }
//   }
// }


// const conta1 = new ContaBancaria("Ana", 1000);
// const conta2 = new ContaBancaria("Bruno", 500);

// conta1.depositar(200);
// conta2.sacar(100);

// conta1.transferir(300, conta2);

// console.log("\n--- Saldos Finais ---");
// console.log(conta1);
// console.log(conta2);
