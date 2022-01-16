export class ContaPoupanca {
  constructor(agencia, cliente, saldoInicial) {
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = saldoInicial;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 100) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
