const listaDeChamada = ['Joao', 'Ana', 'Caio','Lara','Marjorie','Leo']
console.log(listaDeChamada)
 listaDeChamada.splice(1,2,'Rodrigo') // irá remover 2 elementos a partir do indice 1 e adicionar Rodrigo
 console.log(listaDeChamada)

//primeiro parametro é o indice que vai começar a alterar a lista (inclusive)
//segundo parametro é a quantiade de elementos que será retirado
//terceiro parametro é elemento que será inserido

listaDeChamada.splice(2,0,'Rodrigo') //valor 0 no segundo parametro indicar que nada será excluído
console.log(listaDeChamada)