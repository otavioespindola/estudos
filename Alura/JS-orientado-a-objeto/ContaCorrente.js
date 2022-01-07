import {Cliente} from "./Cliente.js"
export class ContaCorrente{
//atributos   
    static numeroDeContas = 0;
    agencia;
    // iniciar variável com _  para indicar que o atributo é privado
    _cliente;
    _saldo = 0; 

//getters e setters
   
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }        
    }
    get cliente(){
        return this._cliente;
    }   
     
    get saldo(){ //definir apenas o 'get' para _saldo para garantir que só possa ser alterado por método do objeto
        return this._saldo
    }

//construtor
    constructor (cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1;
    }

//comportamentos
 
    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor
        } 
    }
    
    depositar(valor){
        if (valor < 0 ) return //tecnica de Early Return - verificar condições indesejadas e interromper o método com retorno vazio
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}