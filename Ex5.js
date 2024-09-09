// Não tinha exercicio 4, pula direto para o 5.
// 5 -  Calcule a média de três notas de um aluno, aplique uma bonificação conforme a faixa de notas, e determine se ele está aprovado ou reprovado.
// Bonificações: notas acima de 85 recebem +5 pontos, entre 70 e 85 recebem +3 pontos, e abaixo de 70 não recebem bonificação.

var prompt = require('prompt-sync')()

let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))

let media = (nota1 + nota2 + nota3) / 3

console.log(`Sua media  é: ${media.toFixed(1)}`)

let bonificacao

if (media > 85) {
    bonificacao = 5
}
else if (media >= 70) {
    bonificacao = 3
}
else {
    bonificacao = 0
}

let mediaFinal = media + bonificacao

console.log(`Sua media final é: ${mediaFinal.toFixed(1)}`)

if(mediaFinal <= 70){
    console.log(`Você foi Reprovado :c`)
}
else{
    console.log(`Você foi Aprovado :D`)
}
