let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
   if (l.indexOf(Number(n)) != -1) {
       return true
   } else {
       return false
   }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        res.innerHTML = ''
        let x = Number(num.value)
        valores.push(x)
        let item = document.createElement('option')
        item.text = `O número ${x} foi adicionado`
        item.value = `list${x}`
        lista.appendChild(item)

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function analisar(){
    if (valores.length == 0) {
        window.alert('Por favor insira números')
    } else {
        res.innerHTML = ' '
            let soma = 0
            let qtdade = Number(valores.length)
            for (c = 0; c < Number(valores.length); c++) {
                soma += valores[c]        
            }
            res.innerHTML = `<p>Foram digitados ${qtdade} elementos </p>  `
            res.innerHTML += `<p>A soma dos números é ${soma} </p> `
            res.innerHTML += `<p>A média dos números digitados é ${soma/qtdade} </p>`
            res.innerHTML += ``
        }
    }
    