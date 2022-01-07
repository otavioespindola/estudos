import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{
    
    static numeroDeContas = 0; // static será um atributo de classe e não de objeto

    constructor (cliente, agencia) {
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}