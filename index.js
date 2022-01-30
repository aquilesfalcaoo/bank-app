import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Ana", 3000, 159282001);
diretor.cadastrarSenha("150358");
const gerente = new Gerente("João", 5000, 958239112);
gerente.cadastrarSenha("523526");
const cliente = new Cliente("Aquiles", 11111111, 4444444);
cliente.cadastrarSenha("358092");

const logadoDiretor = SistemaAutenticao.login(diretor, "150358");
const logadoGerente = SistemaAutenticao.login(gerente, "523526");
const logadoCliente = SistemaAutenticao.login(cliente, "358092");

console.log(logadoDiretor, logadoGerente, logadoCliente);
