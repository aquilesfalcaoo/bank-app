import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(agencia, cliente) {
    super(agencia, cliente, 0);
  }

  sacar(valor) {
    const taxa = 1.01;
    return this.sacar(valor, taxa);
  }
}
