"use strict";
// Tipo Booleano
let estaChovendo = false;
estaChovendo = true;
// Tipo Namber
let idade = 27;
let altura = 1.75;
// Tipo String
const nacionalidade = 'brasileiro';
// Tipo Array de String
const colegas = ['lucas', 'fernanda'];
// Array com a palavra reservada Array
const tecnologias = ['html', 'css', 'js'];
// Array apenas de leitura
const notas = [7, 9, 5, 8];
// A diferença de tecnologias e notas
// tecnologias aceita .push para adicionar, já notas não pode utilizar o .push por ser só leitura, mas utiliza os outros arrays.
//EX:
//tecnologias.push(); // Aceita
//notas.push(); // Não aceita
// Uma tupla permite tipos de dados diferentes
// Duas forma de fazer uma tupla, sem nome para tipagem ou com nome para tipagem
const lista1 = ['gian', true, 27];
const lista2 = ['gian', true, 27];
// Union TYpes: União de tipos
// Permitindo a utilização de números ou strings utilizando o pipe " | "
let idadeDeAna = 25;
idadeDeAna = '25 anos';
// Tipo any é utilizado como se utilizasse o JavaScript sem tipagem
//Muito útil para integração com o Back end, quando não sabemos qual o tipo de dado vai nos devolver 
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
