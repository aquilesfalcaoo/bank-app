export class Cliente {
  get cpf() {
    return this._cpf;
  }

  get rg() {
    return this._rg;
  }

  get senha() {
    return this._senha;
  }

  constructor(nome, cpf, rg, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
    this._senha = senha;
  }

  autenticar(senha) {
    return senha == this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }
}
