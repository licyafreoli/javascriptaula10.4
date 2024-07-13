function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso ideal';
    } else {
        return 'Acima do peso';
    }
}

var peso = 70;
var altura = 1.75; 
console.log(calculaIMC(peso, altura)); 
