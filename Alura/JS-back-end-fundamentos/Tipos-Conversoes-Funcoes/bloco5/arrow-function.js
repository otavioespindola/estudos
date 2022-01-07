//Declaração clássica
function apresentar(nome) {
    return `Meu nome é ${nome}`
}

//Declaração tipo Arrow com apenas 1 linha de código e um parametro: não é necessário usar "()" no parametro, "{}" para o código e return
const apresentarArrow = nome => `meu nome é ${nome}`;

//Declaração tipo Arrow com 2 parametros e 1 linha de código: é necessário "()" para os parametros, mas não é necessário "{}" para o código ou return
const soma = (num1, num2) => num1+num2;

//Declaração tipo Arrow com várias linhas de código: é necessário "()", "{}" e return

const somaNumeroPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2
    }
}

