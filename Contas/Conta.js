export class Conta {
  constructor(agencia, cliente, saldoInicial) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deve instanciar um objeto do tipo Conta. Pois essa é uma classe abstrata."
      );
    }
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = saldoInicial;
  }

  get saldo() {
    return this._saldo;
  }

  //* Método Abstrato
  sacar(valor) {
    throw new Error("O método sacar da Conta é Abstrato.");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } else {
      return 0;
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
