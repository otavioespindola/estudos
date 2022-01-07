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

let relatorio = ''

for (let info in cliente){
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue        
    } else {
        relatorio += `
        ${info}: ${cliente[info]} 
        `
    }
}
// for (let info in cliente){
//     if (typeof cliente[info] === 'function') {
//         continue        
//     } else if (typeof cliente[info] === 'object') {
//         for (let info2 in cliente[info]) {
//             relatorio += `
//             ${info}: ${cliente[info][info2]} 
//             `
//         }

//     } 
//     else{
//         relatorio += `
//         ${info}: ${cliente[info]} 
//         `
//     }
// }

console.log(relatorio)

