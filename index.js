import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente = new Cliente("Aquiles", 11111111, 4444444);

const contaCorrente = new ContaCorrente(1204, cliente, 0);
const contaPoupanca = new ContaPoupanca(1205, cliente, 0);
const contaSalario = new ContaSalario(1206, cliente, 200);

contaCorrente.depositar(500);
contaCorrente.sacar(150);

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);
