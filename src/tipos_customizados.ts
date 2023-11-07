type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

// Criando um Array de alunos utilizando Objeto
const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23
    }
]

// Adicionando um aluno
//alunos.push("Julia"); // Forma errada

// Adicionando um aluno da forma correta
alunos.push(
    {
        nome: "Julia",
        cursos: ["Arquitetura"],
        idade: 29
    }
)

// Utilizando em um Objeto
// Novo aluno reservando a matrícula para um curso que não decidiu
// Porém apresentou um erro devido precisar adicionar o curso
// Como resolver?
// Utilise a "?" na frente da variável curso na tipagem criada acima
const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32
}

// Utilizando em uma função
function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}