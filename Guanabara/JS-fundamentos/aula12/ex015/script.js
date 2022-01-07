function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca_menino.jpg')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem_homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto_homem.jpg')
            } else {
                //idosso
                img.setAttribute('src', 'idoso_homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca_menina.jpg')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem_mulher.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'adulto_mulher.jpg')
            } else {
                //idossa
                img.setAttribute('src', 'idoso_mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos <br>`
        res.appendChild(img)
    }
}