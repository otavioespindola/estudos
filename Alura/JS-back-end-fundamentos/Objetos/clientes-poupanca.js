function Cliente(nome,cpf,email,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += saldo
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoupanca = saldoPoup
}

const ju = new ClientePoupanca('Ju','55544466611','ju@email.com',100,200)

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoupanca += valor
}


ju.depositarPoup(50)
console.log(ju.saldoPoupanca)