function calcular(){
    var tab = document.querySelector('input#txttab')
    var res = document.querySelector('select#seltab')
    
    if (tab.value.length == 0) {
        window.alert('Por favor insira um valor')
    } else {
        var x = Number(tab.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${x} x ${c} = ${x*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }

    }
    
}