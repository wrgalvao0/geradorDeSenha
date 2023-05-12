let tamanhoSenha = 11
let campoTextoSenha = document.querySelector("#texto-senha")
let botaoGerarSenha = document.querySelector("#botao-gerar-senha")
botaoGerarSenha.addEventListener("click", geraSenha)
document.querySelector("#senha-tamanho-texto").innerText = tamanhoSenha
const indicadorSegurancaBarra = document.querySelector("#indicador-seguranca-bar")
let selecaoMaiuscula = document.querySelector("#btncheck1")
let selecaoSimbolo = document.querySelector("#btncheck2")
let selecaoNumerico = document.querySelector("#btncheck3")
function geraSenha()
{
    let caracteres = "abcdefghjkmnpqrstuvwxyz"
    const maisuculas = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const simbolos = "?!@&*()[]"
    const numeros = "123456789"
    let senha = ""

    if(selecaoMaiuscula.checked)
    {
        caracteres += maisuculas
    }
    if(selecaoNumerico.checked)
    {
        caracteres += numeros
    }
    if(selecaoSimbolo.checked)
    {
        caracteres += simbolos
    }
    
    for(let i = 0; i < tamanhoSenha; i++)
    {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres.substring(indiceAleatorio, indiceAleatorio + 1)
    }
    campoTextoSenha.value = senha
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

function copiarSenha()
{
    navigator.clipboard.writeText(campoTextoSenha.value)
}

tamanhoSenhaElemento = document.querySelector("#tamanho-senha")
tamanhoSenhaElemento.addEventListener("input", getTamanhoSenha)
const botaoCopiarSenha = document.querySelector("#botao-copiar-senha")
botaoCopiarSenha.addEventListener("click", copiarSenha)

