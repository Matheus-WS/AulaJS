//2 - Receba as medidas dos lados de um quadrilátero e determine se é um quadrado, retângulo, losango ou outro

var prompt = require('prompt-sync')()


let lado1 = Number(prompt("Digite a medida do primeiro lado: "))
let lado2 = Number(prompt("Digite a medida do segundo lado: "))
let lado3 = Number(prompt("Digite a medida do terceiro lado: "))
let lado4 = Number(prompt("Digite a medida do quarto lado: "))


if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
    console.log('O quadrilátero é um quadrado ou um losango.');
}
else if (lado1 === lado3 && lado2 === lado4) {
    console.log('O quadrilátero é um retângulo.');
}
else {
    console.log('O quadrilátero é de outro tipo.');
}
