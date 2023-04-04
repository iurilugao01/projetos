let inputDebito = document.getElementById('debito')
let saldo = document.getElementById('saldo')
  
let entrada = document.getElementById('entrada')
let saida = document.getElementById('saida')

  if(localStorage.getItem('saldo') !== null) {
    saldo.innerText = localStorage.getItem("saldo")
  }
  if(localStorage.getItem('entrada') !== null) {
    entrada.innerText = localStorage.getItem("entrada")
  }
  if(localStorage.getItem('saida') !== null) {
    saida.innerText = localStorage.getItem("saida")
  }

function pagar() {

    let saldoNumber = parseFloat(saldo.innerText)
    let debitoNumber = parseFloat(inputDebito.value)

    let saidaNumber = parseFloat(saida.innerText)
    
    if(inputDebito.value !== "" && !isNaN(debitoNumber)) {
      saida.innerText = String(saidaNumber + debitoNumber);
    }

    if(inputDebito.value !== "" && !isNaN(debitoNumber)) {
        saldo.innerText = String(saldoNumber - debitoNumber);
      }

    localStorage.setItem("saida", saida.innerText) 
    localStorage.setItem("saldo", saldo.innerText)
    
    inputDebito.value = null
    
    
}
function receber() {
    let saldoNumber = parseFloat(saldo.innerText)
    let debitoNumber = parseFloat(inputDebito.value)

    let entradaNumber = parseFloat(entrada.innerText)
    
    if(inputDebito.value !== "" && !isNaN(debitoNumber)) {
      entrada.innerText = String(entradaNumber + debitoNumber);
    }

    if(inputDebito.value !== "" && !isNaN(debitoNumber)) {
        saldo.innerText = String(saldoNumber + debitoNumber);
      }

    localStorage.setItem("entrada", entrada.innerText)  
    localStorage.setItem("saldo", saldo.innerText)
    
    inputDebito.value = null
}






