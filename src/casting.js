"use strict";
// Convertendo o any
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // Converter para número
    idade.length; // Converter para string
    idade.forEach(x => {
        console.log(x);
    });
    // Convertendo um número para o tipo string
    let nome = 35;
})(casting || (casting = {}));
