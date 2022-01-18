import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  //! Construtores inicializa-se os atributos
  constructor(agencia, cliente, saldoInicial) {
    super(agencia, cliente, saldoInicial);
    ContaCorrente.numeroDeContas += 1;
  }
}
