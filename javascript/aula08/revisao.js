let usuario = prompt('Digite o seu id de Usuario')
let senha = prompt('Insira a sua senha de acesso')

let usuarioCerto = "kleber"
let senhaCerta = "kleber011"

if (usuario == usuarioCerto && senha == senhaCerta) {
    alert('ID e Senha Corretos! Acesso Liberado.')

    alert("Opção 1: Crédito \n Opção 2: Consignado \n Opção 3: Empréstimo \n Opção 4: Renegociar \n Opção 0: Falar com Atendente")

    let opcao = Number(prompt("Escolha a opção"))

    switch (opcao) {
        case 1:
            alert("Opção Crédito selecionada")
            break;
        case 2:
            alert("Opção Consignado selecionada")
            break;
        case 3:
            alert("Opção Empréstimo selecionada")
            break;
        case 4:
            alert("Opção Renegociar selecionada")
            break;
        case 0:
            alert("Aguarde enquanto um dos nossos atendentes irá falar com você")
            break;
        default:
            alert("Nenhuma opção selecionada")
            break;
    }
}
else {
    alert("Dados inseridos incorretos!")
}