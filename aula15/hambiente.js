let num = [4,6,8,1,2]

num.sort()//coloca em ordem

num.push(3)

console.log(num)

console.log(`o vetor tem ${num.length} posiçoes` )

console.log(`o primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(4)
if(pos == -1){
    console.log('o valor nao foi encontrado')
} else {
    console.log(`o valor 8 esta na posição ${pos}`)
}
