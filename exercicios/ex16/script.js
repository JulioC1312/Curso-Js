var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n))  != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    
       
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0 
        var media = 0

        for(var pos in valores) {
            soma += valores[pos]
            if(valores [pos] > maior )
            maior = valores[pos]

            if(valores [pos] < menor )
            maior = valores[pos]

        }
        media = soma / tot


        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>  `
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>  `
        res.innerHTML += `<p>somando todos os valores deu o total de  ${soma}</p>  `
        res.innerHTML += `<p>a média dos valores digitados é  ${media}</p>  `
        
        

    }
}