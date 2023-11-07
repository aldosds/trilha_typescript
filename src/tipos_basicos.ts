// Tipo Booleano
let estaChovendo: boolean = false;

estaChovendo = true;

// Tipo Namber
let idade: number = 27;

let altura: number = 1.75;

// Tipo String
const nacionalidade: string = 'brasileiro';

// Tipo Array de String
const colegas: string[] = ['lucas', 'fernanda'];

// Array com a palavra reservada Array
const tecnologias: Array<string> = ['html', 'css', 'js'];

// Array apenas de leitura
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

// A diferença de tecnologias e notas
// tecnologias aceita .push para adicionar, já notas não pode utilizar o .push por ser só leitura, mas utiliza os outros arrays.
//EX:
//tecnologias.push(); // Aceita
//notas.push(); // Não aceita

// Uma tupla permite tipos de dados diferentes
// Duas forma de fazer uma tupla, sem nome para tipagem ou com nome para tipagem
const lista1: [string, boolean, number] = ['gian', true, 27];
const lista2: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27];

// Union TYpes: União de tipos
// Permitindo a utilização de números ou strings utilizando o pipe " | "
let idadeDeAna: number | string = 25;
idadeDeAna = '25 anos';

// Tipo any é utilizado como se utilizasse o JavaScript sem tipagem
//Muito útil para integração com o Back end, quando não sabemos qual o tipo de dado vai nos devolver 
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1,2,3];
dadosDaApi = 'string';