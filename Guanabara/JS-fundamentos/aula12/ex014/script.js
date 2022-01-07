
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'fotodia.jpg'
        document.body.style.background = "#aaaa42"
    } else if (hora >=12 && hora < 18) {
        // Boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = "#e06d2a"
    } else {
        // Boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#080836'
    }
}
