const cliente = {
    nome:'Andre',
    idade:'36',
    cpf:'123456789',
    email: 'andre@email.com',
    fones: [5519999882555,551188877443],
    dependente: [{nome: 'Sara Silva',
    parentesco: 'filha',
    dataNasc: '20/03/2011'}]
}

cliente.dependente.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc:  '04/01/2014'
})

const filhaMaisNova = cliente.dependente.filter(maisNova => maisNova.dataNasc==='04/01/2014')

console.log(filhaMaisNova)

