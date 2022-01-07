//declaração de função
function minhaFunc (param) {
    // bloco de código
}

// minhaFunc('parametro')

// expressão de função

const soma = function(num1,num2) {return num1 + num2}

// console.log(soma(1,2))

// Principal diferença entre as duas

console.log(apresentar())

function apresentar(){
    return "Olá"
}

//acima podemos ver que a chamada da função pode ser usada mesmo antes de sua declaração
var soma2 = function(num1,num2) {return num1 + num2}
console.log(soma2(1,2))

 // acima a função se comporta como uma variavel, então ocorre o erro.
 // ser ao invés de utilizar "const" utilizassemos "var" o código funcionaria sem erro
