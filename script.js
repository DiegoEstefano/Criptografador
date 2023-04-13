let messageInputed = document.querySelector('#messageInputed')
let criptografar = document.querySelector('#criptografar')
let descriptografar = document.querySelector('#descriptografar')
let output = document.querySelector('#container-output') 
let messageOutput = document.querySelector('#messageOutput')
let menssageEncripted = ''
let menssageDencripted = ''

criptografar.addEventListener("click", function() {
    if (menssageEncripted == false) {
        alert('Digite uma mensagem a ser criptografada')
    } else {
        menssageEncripted = messageInputed.value.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat")
        output.innerHTML = '<textarea id="messageOutput" cols="">' + menssageEncripted + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
        output.style.justifyContent = 'space-between'
    }
})

descriptografar.addEventListener("click", function() {
      if (menssageEncripted == false) {
        alert('Digite uma mensagem a ser descriptografada')
    } else {
        menssageDencripted = messageInputed.value.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/, "u")
        output.innerHTML = '<textarea id="messageOutput" cols="">' + menssageDencripted + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    }
})


