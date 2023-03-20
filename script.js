let inputDebito = document.getElementById('debito')
let saldo = document.getElementById('saldo')

if(localStorage.getItem('saldo') !== null) {
    saldo.innerText = localStorage.getItem("saldo")
  }
  
mudarCorDoSaldo()


function pagar() {
    let saldoNumber = parseFloat(saldo.innerText)
    let debitoNumber = parseFloat(inputDebito.value)
    
    saldo.innerText = String(saldoNumber - debitoNumber)
    localStorage.setItem("saldo", saldo.innerText)

    inputDebito.value = null
    mudarCorDoSaldo()
    
}
function receber() {
    let saldoNumber = parseFloat(saldo.innerText)
    let debitoNumber = parseFloat(inputDebito.value) 

    saldo.innerText = String(saldoNumber + debitoNumber)
    localStorage.setItem("saldo", saldo.innerText)

    inputDebito.value = null
    mudarCorDoSaldo()
}
function mudarCorDoSaldo() {
    if (saldo.innerText[0] === "-") {
        saldo.style.color = "red"
    } else {
        saldo.style.color = "green"
    }
}
function reset() {
    localStorage.setItem("saldo", 50000)
    saldo.innerText = 50000
}




