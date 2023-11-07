"use strict";
// OBS: ? faz com que a variável fique opcional, porém, o uso da variável com a ? deve ser após a obrigatória, senão, não vai funcionar.
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    // Metodo
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
// Criando Conta Bancaria
class ContaBancaria {
    constructor(numeroDaconta) {
        this.saldo = 0;
        this.numeroConta = numeroDaconta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    deposito(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// Acesso com o static
ContaBancaria.retornaNumeroDoBanco();
