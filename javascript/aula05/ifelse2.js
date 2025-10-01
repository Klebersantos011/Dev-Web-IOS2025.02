

let idade = 18
let temDinheiro = false
let cadUnico = true

if (idade >= 18) {
    if (temDinheiro == true) {
        console.log('Vamos pagar o quebra');
    }
    else {
        if (cadUnico == true) {
            console.log('Você pode ter a cnh, pelo cadunico');
        } else {
            console.log('Você não pode tirar a cnh pelo cadunico, por falta de cadastro');
        }
    }
}
else {
    console.log('Você não pode dirigir');
}