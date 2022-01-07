import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// Criação de objetos da classe Cliente
const cliente1 = new Cliente('Ricardo','11122233390');
const cliente2 = new Cliente('Alice','88822233309' );

//Criando novos objetos de ContaCorrente
const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);
const conta2 = new ContaCorrente(cliente2, 102);

// depositando na conta do Ricardo
contaCorrenteRicardo.depositar(500);

//testando método Transferir
let valorDeTransferencia = 200;
contaCorrenteRicardo.transferir(valorDeTransferencia, conta2)

//Mostrando os dados da conta corrente
console.log(ContaCorrente.numeroDeContas);