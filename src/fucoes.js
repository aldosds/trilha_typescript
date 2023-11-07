"use strict";
// Tipando uma função
function calculaArea(base, altura) {
    return base * altura;
}
// Tipando uma Arrow Function
const calculaArea2 = (base, altura) => base * altura;
// Tipando utilizando o Rest Parameter
function soma(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
// Utilizando o Union TYpes
function teste() {
    if (10 > 5) {
        return 'Dez maior que cinco';
    }
    else {
        return 5;
    }
}
// Ao ver o resultado de teste, ela pode ser de uma string ou de um número
const resultadoDeTeste = teste();
