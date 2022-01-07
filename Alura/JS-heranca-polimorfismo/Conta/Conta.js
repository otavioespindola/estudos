export class Conta {

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta) {
            throw new Error("Não instanciar a classe abstrata tipo Conta diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;        
    }

    //métodos de acesso aos atributos privados (indicados por _ )

    get saldo(){ //definir apenas o 'get' para _saldo para garantir que só possa ser alterado por método do objeto
        return this._saldo
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }        
    }
    get cliente(){
        return this._cliente;
    }      
    

 //comportamentos
    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0
    }
    //método abstrado - toda classe herdada precisará sobrescrever o método, ao contrário o método não fará nada
    sacar(valor){
        throw new Error('O método sacar de Conta é abstrato')
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