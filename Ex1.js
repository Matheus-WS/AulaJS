// 1 - Receba uma sequência de três números e determine se estão em ordem crescente, decrescente ou desordenada.
var prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));

if (n1 < n2 && n2 < n3) {
    console.log(`Ordem Crescente`)
}
else if (n1 > n2 && n2 > n3) {
    console.log(`Ordem Decrescente`)
}
else {
    console.log(`Desordenada`)
}
