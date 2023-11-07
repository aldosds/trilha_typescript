// Tipando uma função
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

// Tipando uma Arrow Function
const calculaArea2 = (base: number, altura: number): number => base * altura;

// Tipando utilizando o Rest Parameter
function soma(...numeros: number[]): void {
    //numeros.reduce()
    console.log(numeros);
}

// Utilizando o Union TYpes
function teste(): string | number {
    if(10 > 5) {
        return 'Dez maior que cinco'
    } else {
        return 5;
    }
}

// Ao ver o resultado de teste, ela pode ser de uma string ou de um número
const resultadoDeTeste = teste();