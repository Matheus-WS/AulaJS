// 3 - Um vendedor ganha comissão baseada no total de vendas: abaixo de 5000, nenhuma comissão; entre 5000 e 10000, 5%; acima de 10000, 10%.
//Calcule a comissão com base nas vendas de 3 meses.

var prompt = require('prompt-sync')()

let venda1 = Number(prompt("Vendas do primeiro mês:"))
let venda2 = Number(prompt("Vendas do segundo mês:"))
let venda3 = Number(prompt("Vendas do terceiro mês:"))

let total = venda1 + venda2 + venda3
let resultado

if(total < 5000){
    resultado =  total * 0
}
else if (total >= 5000 && total <= 10000) {
    resultado = total * 0.05
}
else{
    resultado = total * 0.10
}


console.log(`Sua comissão é de R$: ${resultado}`)
