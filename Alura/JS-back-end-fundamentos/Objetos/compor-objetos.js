const cliente = {
    nome:'Andre',
    idade:'36',
    cpf:'123456789',
    email: 'andre@email.com',
    fones: [5519999882555,551188877443]
}

cliente.dependente = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}

console.log(cliente)

cliente.dependente.nome = 'Sara Silva'

console.log(cliente)