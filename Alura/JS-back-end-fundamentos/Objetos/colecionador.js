const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: ["joao@email.com"],
    adicionarTipo: function(propriedade, valor){
        this[propriedade].push(valor)
    }
}

colecionador.adicionarTipo('tipocolecao','HQ')

// console.log(colecionador.nome)
// console.log(colecionador['nome'])
console.log(colecionador.tipocolecao)
colecionador.adicionarTipo('contato','ladrão')
console.log(colecionador)