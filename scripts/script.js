/* -----------------------Importação dos inputs do HTML ------------------------------- */

let messageInputed = document.querySelector('#messageInputed')     // textarea para digitação do texto
let criptografar = document.querySelector('#criptografar')         // botão criptografar
let descriptografar = document.querySelector('#descriptografar')   // botão Descriptografar
let containerOutput = document.querySelector('#container-output')  // text area onde aparece o texto


// Função de copia do texto 
const copy = () => {
    var copyText = document.getElementById('text')
    copyText.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}


// Função para criptografia
criptografar.addEventListener("click", function () {
    menssageEncripted = messageInputed.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    if (menssageEncripted == false) {
        alert('Digite uma mensagem a ser criptografada')
    } else {
        containerOutput.innerHTML = '<textarea id="text">' + menssageEncripted + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copy()">Copiar</button>'
        containerOutput.style.justifyContent = 'space-between'
    }

})

// Função para descriptografar
descriptografar.addEventListener("click", function () {
    menssageDencripted = messageInputed.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    console.log(menssageDencripted)
    if (menssageDencripted == '') {
        alert('Digite uma mensagem a ser descriptografada')
    } else {
        containerOutput.innerHTML = '<textarea id="messageOutput" cols="">' + menssageDencripted + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
        containerOutput.style.justifyContent = 'space-between'
    }
})



