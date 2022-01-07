function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    if (Number.isInteger(numero) === true && Number.isInteger(outroNumero) === true ) {
        if (operacao === "+") {
            return numero + outroNumero
        } else if (operacao === "-") {
            return numero - outroNumero
        } else {
            return 0
        }
    } else {
        return 0
    }
}

let resultado = calculadoraAdicaoSubtracao(2,1,"a")
console.log(resultado)