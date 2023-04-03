let inputDebito = document.getElementById('debito')
let saldo = document.getElementById('saldo')

  if(parseFloat(inputDebito.value) = NaN ) {
    inputDebito.value = "0"
  }
  
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

    saida.innerText = String(inputDebito.value)
    localStorage.setItem("saida", saida.innerText)

    if(inputDebito.value !== "" && !isNaN(debitoNumber)) {
        saldo.innerText = String(saldoNumber - debitoNumber);
      }

     
    localStorage.setItem("saldo", saldo.innerText)
    inputDebito.value = null
    
    
}
function receber() {
    let saldoNumber = parseFloat(saldo.innerText)
    let debitoNumber = parseFloat(inputDebito.value)

    entrada.innerText = String(inputDebito.value)
    localStorage.setItem("entrada", entrada.innerText)

    if(inputDebito.value !== "" && !isNaN(debitoNumber)) {
        saldo.innerText = String(saldoNumber + debitoNumber);
      }

    localStorage.setItem("saldo", saldo.innerText)
    inputDebito.value = null
}






