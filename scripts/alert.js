let alerta = document.querySelector('#alerta')                      // img ! 
let balaoalerta = document.querySelector('#balaoAlerta')

alerta.addEventListener("mouseover", function () {
    balaoalerta.classList.remove('apaga')
    balaoalerta.classList.add('transicao')
 
})
alerta.addEventListener("mouseout", function () {
    balaoalerta.classList.remove('transicao')
    balaoalerta.classList.add('apaga')
})

