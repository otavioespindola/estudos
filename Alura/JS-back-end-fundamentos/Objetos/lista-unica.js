const clientes = [
    {
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
            {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc:  '04/01/2014'
            }
        ]
    },
    {
        nome: "Juliana",
        cpf: "6543217890",
        dependente: [
            {   
                nome: "Sofia",
                parentesco: "filha",
                dataNasc: "30/08/2020"

            }
        ]
    }
]

const listaDependentes = [...clientes[0].dependente,...clientes[1].dependente]

console.log(listaDependentes)