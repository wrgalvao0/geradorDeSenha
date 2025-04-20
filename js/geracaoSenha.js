let tamanhoSenha = 11
let campoTextoSenha = document.querySelector("#texto-senha")
let botaoGerarSenha = document.querySelector("#botao-gerar-senha")
botaoGerarSenha.addEventListener("click", geraSenha)
document.querySelector("#senha-tamanho-texto").innerText = tamanhoSenha
const indicadorSegurancaBarra = document.querySelector("#indicador-seguranca-bar")
let selecaoMaiuscula = document.querySelector("#btncheck1")
let selecaoSimbolo = document.querySelector("#btncheck2")
let selecaoNumerico = document.querySelector("#btncheck3")

function geraSenha() {
    let caracteres = "abcdefghjkmnpqrstuvwxyz"
    const maiusculas = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const simbolos = "?!@&*()[]"
    const numeros = "123456789"
    let senha = []
    let obrigatorios = []

    if (selecaoMaiuscula.checked) {
        caracteres += maiusculas
        obrigatorios.push(maiusculas[Math.floor(Math.random() * maiusculas.length)])
    }

    if (selecaoNumerico.checked) {
        caracteres += numeros
        obrigatorios.push(numeros[Math.floor(Math.random() * numeros.length)])
    }

    if (selecaoSimbolo.checked) {
        caracteres += simbolos
        obrigatorios.push(simbolos[Math.floor(Math.random() * simbolos.length)])
    }

    // Garante que a senha tenha pelo menos os obrigatórios
    for (let i = 0; i < tamanhoSenha - obrigatorios.length; i++) {
        senha.push(caracteres[Math.floor(Math.random() * caracteres.length)])
    }

    // Adiciona os obrigatórios à senha
    senha = senha.concat(obrigatorios)

    // Embaralha a senha (Fisher-Yates shuffle)
    for (let i = senha.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = senha[i]
        senha[i] = senha[j]
        senha[j] = temp
    }

    campoTextoSenha.value = senha.join("")
    calculaQualidadeSenha()
}


function calculaQualidadeSenha()
{
    /*
        Pesos para calculo de qualidade: 
        Tamanho: 25%
        Maiusculas: 15%
        Numerico: 25%
        Simbolos: 35%
        total = 100%
    */
    let porcentagem = Math.round((tamanhoSenha / 16) * 100 * 0.25 + (selecaoMaiuscula.checked ? 15 : 0) + (selecaoNumerico.checked ? 25 : 0) + (selecaoSimbolo.checked ? 35 : 0))
    if(porcentagem > 0 && porcentagem <= 33)
    {
        indicadorSegurancaBarra.classList.remove("sucesso")
        indicadorSegurancaBarra.classList.remove("aviso")
        indicadorSegurancaBarra.classList.add("critico")
        //critico
    }
     else if(porcentagem > 33 && porcentagem <= 66)
    {
        //aviso = yelow
        indicadorSegurancaBarra.classList.remove("critico")
        indicadorSegurancaBarra.classList.remove("sucesso")
        indicadorSegurancaBarra.classList.add("aviso")
    }
    else
    {
        indicadorSegurancaBarra.classList.remove("aviso")
        indicadorSegurancaBarra.classList.remove("critico")
        indicadorSegurancaBarra.classList.add("sucesso")
        //safe demais
    }
    //console.log(porcentagem)
    indicadorSegurancaBarra.style.width = `${porcentagem}%`
}

function getTamanhoSenha()
{
    tamanhoSenha = tamanhoSenhaElemento.value
    document.querySelector("#senha-tamanho-texto").innerText = tamanhoSenha
}


function copiarSenha() {
    navigator.clipboard.writeText(campoTextoSenha.value).then(() => {
        const mensagem = document.querySelector("#mensagem-copiada")
        mensagem.style.display = "flex"

        // Esconde a mensagem depois de 5 segundos
        setTimeout(() => {
            mensagem.style.display = "none"
            mensagem.style.justifyContent = "center"
        }, 5000)
    })
}


tamanhoSenhaElemento = document.querySelector("#tamanho-senha")
tamanhoSenhaElemento.addEventListener("input", getTamanhoSenha)
const botaoCopiarSenha = document.querySelector("#botao-copiar-senha")
botaoCopiarSenha.addEventListener("click", copiarSenha)

