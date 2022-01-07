const cliente = {
    nome:'Andre',
    idade:'36',
    cpf:'123456789',
    email: 'andre@email.com',
    fones: ['5519999882555','551188877443'],
    dependente: [
        {
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
        },
        {nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc:  '04/01/2014'
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependente")){
        console.log(`Oferta de seguro para ${obj.nome}`)

    }
}

oferecerSeguro(cliente)