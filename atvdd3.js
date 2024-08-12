function maiorNumero(){
    let num1 = Number(prompt('qual é o primeiro numero?'))
    let num2 = Number(prompt('qual é o segundo numero?'))
    if (num1>num2){
        alert('o numero: '+num1+'é maior')
    }else if (num2>num1){
        alert('o numero: '+num2+'é maior')
    }else{
        alert('os numeros são iguais')
    }
}