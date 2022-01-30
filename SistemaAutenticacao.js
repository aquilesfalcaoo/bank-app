export class SistemaAutenticao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}
