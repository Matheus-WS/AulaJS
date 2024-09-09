// 6 - Cálculo do IMC com Categorias Detalhadas. Implemente um programa que calcula o Índice de Massa Corporal (IMC) e categoriza o resultado de acordo
//com as faixas específicas, fornecendo uma mensagem detalhada sobre o estado de saúde. Categorias de IMC:
// ○ Menor que 18.5: Abaixo do peso
// ○ 18.5 a 24.9: Peso normal
// ○ 25 a 29.9: Sobrepeso
// ○ 30 a 34.9: Obesidade grau I
// ○ 35 a 39.9: Obesidade grau II
// ○ Maior ou igual a 40: Obesidade grau III

var prompt = require('prompt-sync')()


let peso = Number(prompt("Digite seu peso em kg:"))
let altura = Number(prompt("Digite sua altura em metros:"))


let imc = peso / (altura * altura)

let resultado
if (imc < 18.5) {  
    resultado = "Você está abaixo do peso recomendado."
}
else if (imc >= 18.5 && imc < 25) {  
    resultado = "Você está com o peso normal."
}
else if (imc >= 25 && imc < 30) {  
    resultado = "Você está com sobrepeso."
}
else if (imc >= 30 && imc < 35) {
    resultado = "Você está com obesidade grau I."
}
else if (imc >= 35 && imc < 40) {    
    resultado = "Você está com obesidade grau II."
}
else {
    resultado = "Você está com obesidade grau III."
}


console.log(`Seu IMC é ${imc.toFixed(1)} ${resultado}`)
