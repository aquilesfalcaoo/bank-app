import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Aquiles", 11111111, 4444444);

const contaCorrente = new Conta("corrente", 1204, cliente1, 500);
const contaPoupanca = new Conta("poupanca", 1205, cliente1, 0);

console.log(contaCorrente);
console.log(contaPoupanca);
