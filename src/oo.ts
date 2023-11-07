// OBS: ? faz com que a variável fique opcional, porém, o uso da variável com a ? deve ser após a obrigatória, senão, não vai funcionar.
class Pessoa {
    nome: string;
    renda?: number;


    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }


    // Método
    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}


// Criando Conta Bancária
class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;


    constructor(numeroDaconta: number) {
        this.numeroConta = numeroDaconta;
    }


    static retornaNumeroDoBanco() {
        return 125;
    }


    private getSaldo() {
        return this.saldo;
    }


    setSaldo(valor: number) {
        this.saldo += valor;
    }
}


class ContaBancariaPessoaFisica extends ContaBancaria {
    deposito(valor: number): void {
        this.saldo = valor * 2;
    }
}


const contaDoPedro = new ContaBancariaPessoaFisica(123456);


// Acesso com o static
ContaBancaria.retornaNumeroDoBanco();
