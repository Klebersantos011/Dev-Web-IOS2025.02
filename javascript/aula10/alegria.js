let login
let loginCerto = "kleber@123"
let senhaCerta = "12345"
let senha

//Enquanto a senha do usuario inserir for diferente da certa, continuaremos pedindo para que ele insira a senha novamente

do {
    senha = prompt('Insira a sua senha de acesso')

} while (senha != senhaCerta);
do {
    login = prompt('Insira o seu login')
} while (login != loginCerto);