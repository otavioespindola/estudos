let amigo = {
        nome: 'Jose',
        sexo: 'M',
        peso: 84.5,
        engordar(p=0) {
            console.log('Engordou')
            this.peso += p
        }
}
amigo.engordar(5)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso}kg`)