let tamanhoSenha = 12
let campoTextoSenha = document.querySelector("#texto-senha")
let botaoGerarSenha = document.querySelector("#botao-gerar-senha")
botaoGerarSenha.addEventListener("click", geraSenha)

function geraSenha()
{
    let caracteres = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
    let senha = ""
    //console.log(tamanhoSenha.value)
    for(let i = 0; i < tamanhoSenha; i++)
    {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres.substring(indiceAleatorio, indiceAleatorio + 1)
    }
    console.log(senha)
    campoTextoSenha.value = senha
}

function getTamanhoSenha()
{
    tamanhoSenha = tamanhoSenhaElemento.value
    console.log(tamanhoSenha)
}

function copiarSenha()
{
    navigator.clipboard.writeText(campoTextoSenha.value)
}

tamanhoSenhaElemento = document.querySelector("#tamanho-senha")
tamanhoSenhaElemento.addEventListener("input", getTamanhoSenha)
const botaoCopiarSenha = document.querySelector("#botao-copiar-senha")
botaoCopiarSenha.addEventListener("click", copiarSenha)

