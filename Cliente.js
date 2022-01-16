export class Cliente {
  get cpf() {
    return this._cpf;
  }

  get rg() {
    return this._rg;
  }
  // Definindo as atribuições
  constructor(nome, cpf, rg) {
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
  }
}
