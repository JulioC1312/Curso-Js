var amigo = {nome: 'jose',
sexo: 'M',
peso: 84.2,
engordar(p){
    console.log('engordou')
    this.peso += p
}

}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)