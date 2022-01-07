import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456')

const gerente = new Gerente('Ricardo', 5000, 32165498701);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 98765432198,'456');

const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente,'123');
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor,'123456');
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente,'456');


console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);