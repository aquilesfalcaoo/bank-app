import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  // Atributo Estático
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  // SET - Setar apenas um novo valor
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  // GET - Serve apenas para leitura, e sempre ter um retorno.
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // Construtores inicializa-se os atributos
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
