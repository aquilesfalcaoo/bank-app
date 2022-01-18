import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente = new Cliente("Aquiles", 11111111, 4444444);

const contaCorrente = new ContaCorrente(1204, cliente, 500);
const contaPoupanca = new ContaPoupanca(1205, cliente, 0);

console.log(contaCorrente);
console.log(contaPoupanca);
