
function contar() {
    var inicio = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var passo = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar'
       // window.alert('Insira valores em todos os campos')
    } else {
        res.innerHTML = ('Contando: ')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo não pode ser menor ou igual a zero. Considerando Passo 1')
            p = 1
        }        
        if (i < f) {
           for (var c = i; c  <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }             
        } else {
            for (var c = i; c  >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
                  
        }
        res.innerHTML += `\u{1f3c1}`        
    }
    
}  

        