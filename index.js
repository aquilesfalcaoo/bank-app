import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Criando o novo Cliente
const cliente1 = new Cliente("Aquiles", 11111111, 4444444);
const cliente2 = new Cliente("Alice", 99999999, 5555555);

//! Depois de atribuido os valores no constructor,
//! não posso alterar depois disso.

//* Cliente 1
// cliente1.nome = "Aquiles";
// cliente1._cpf = 11122233345;
// cliente1._rg = 4567891;
//* Cliente 2
// cliente2.nome = "Fulano";
// cliente2._cpf = 22233344456;
// cliente2._rg = 6789101;

// Criando a Classe Conta Corrente
const conta1 = new ContaCorrente(1204, cliente1);
const conta2 = new ContaCorrente(1204, cliente2);

//* Conta Corrente
// conta1.agencia = 1201;
// conta1.cliente = cliente1;
conta1._saldo = 2000;
//* Conta Corrente 2
// conta2.agencia = 1201;
// conta2.cliente = cliente2;
conta2._saldo = 0;

conta1.transferir(2000, conta2);

//! Métodos Depósito e Sacar
// contaCorrenteAquiles.depositar(2000);
// const valorSacado = contaCorrenteAquiles.sacar(1000);
// console.log("Saque:", valorSacado);
// console.log(contaCorrenteAquiles);

console.log(ContaCorrente.numeroDeContas);
