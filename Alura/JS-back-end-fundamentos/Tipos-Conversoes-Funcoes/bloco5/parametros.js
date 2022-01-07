

function soma (num1,num2){
    return num1 + num2
}

console.log(soma(4,5))
// console.log(soma(-42,60))
// console.log(soma(1887,-42))

// parâmetros x argumento
// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Juliana", 40))

function multiplica(numero1=1,numero2=1){
    return numero1 * numero2
}

console.log(multiplica(soma(2, 3), soma(3,2)))