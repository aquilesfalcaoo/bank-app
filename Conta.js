export class Conta {
  constructor(agencia, cliente, saldoInicial) {
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = saldoInicial;
  }

  sacar(valor) {
    let taxa = 1;
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }

  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
